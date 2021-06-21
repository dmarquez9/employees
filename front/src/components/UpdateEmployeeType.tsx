import { useFormik } from 'formik';

import * as yup from 'yup';
import { useMutation } from '@apollo/client';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import Modal from './Modal';
import { UPDATE_EMPLOYEE_TYPE } from '../queries/EmployeeTypes.queries';
import { EmployeeTypesProps } from '../types/EmployeeTypes.types';

type UpdateEmployeeTypeProps = {
  open: boolean;
  handleClose: () => void;
  data: EmployeeTypesProps;
}

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Employee type name is required'),
  color: yup
    .string()
    .required('Employee type color is required'),
});


const UpdateEmployeeType: React.FC<UpdateEmployeeTypeProps> = ({
  open,
  handleClose,
  data
}) => {
  const formik = useFormik({
    initialValues: {
      id: data?.id,
      name: data?.name,
      color: data?.color,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      putEmployeeType({
        variables: {
          id: values.id,
          name: values.name,
          color: values.color
        }
      })
    },
  });
  
  const [putEmployeeType, { data: mutationData }] = useMutation(UPDATE_EMPLOYEE_TYPE, {
    onCompleted: ({ updateEmployeeType }) => {
      if (updateEmployeeType?.result) {
        formik.resetForm()
        handleClose()
      }
    }
  });

  return (
    <Modal
      open={open}
      handleClose={handleClose}
    >
      {mutationData?.updateEmployeeType?.message && !mutationData?.updateEmployeeType?.result && (
        <Typography paragraph color="secondary">{mutationData.updateEmployeeType.message}</Typography>
      )}
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          margin="normal"
        />
        <TextField
          fullWidth
          id="color"
          name="color"
          label="Color"
          value={formik.values.color}
          onChange={formik.handleChange}
          error={formik.touched.color && Boolean(formik.errors.color)}
          helperText={formik.touched.color && formik.errors.color}
          margin="normal"
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Modal>
  )
}

export default UpdateEmployeeType
