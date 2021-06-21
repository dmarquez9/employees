import { useFormik } from 'formik';

import * as yup from 'yup';
import { useMutation } from '@apollo/client';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Modal from './Modal';
import { ADD_EMPLOYEE_TYPE } from '../queries/EmployeeTypes.queries';

type CreateEmployeeTypeProps = {
  open: boolean;
  handleClose: () => void;
}

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Employee type name is required'),
  color: yup
    .string()
    .required('Employee type color is required'),
});


const CreateEmployeeType: React.FC<CreateEmployeeTypeProps> = ({
  open,
  handleClose
}) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      color: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      addEmployeeType({
        variables: {
          name: values.name,
          color: values.color
        }
      })
    },
  });
  
  const [addEmployeeType, { data }] = useMutation(ADD_EMPLOYEE_TYPE, {
    onCompleted: ({ createEmployeeType }) => {
      if (createEmployeeType?.result) {
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
      {data?.createEmployeeType?.message && !data?.createEmployeeType?.result && (
        <p>{data.createEmployeeType.message}</p>
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

export default CreateEmployeeType
