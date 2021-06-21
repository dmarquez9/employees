import { useFormik } from 'formik';

import * as yup from 'yup';
import { useMutation } from '@apollo/client';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import Modal from './Modal';
import { UPDATE_EMPLOYEES } from '../queries/Employees.queries';
import { EmployeesProps } from '../types/Employees.types';
import SelectEmployeeType from './SelectEmployeeType';

type UpdateEmployeeTypeProps = {
  open: boolean;
  handleClose: () => void;
  data: EmployeesProps;
}

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Employee type name is required'),
  employeetype: yup
    .string()
    .required('Employee type is required'),
});


const UpdateEmployee: React.FC<UpdateEmployeeTypeProps> = ({
  open,
  handleClose,
  data
}) => {
  const formik = useFormik({
    initialValues: {
      id: data?.id,
      name: data?.name,
      employeetype: data?.employeeType?.id,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      putEmployeeType({
        variables: {
          id: values.id,
          name: values.name,
          employeeTypeId: values.employeetype
        }
      })
    },
  });
  
  const [putEmployeeType, { data: mutationData }] = useMutation(UPDATE_EMPLOYEES, {
    onCompleted: ({ updateEmployee }) => {
      if (updateEmployee?.result) {
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
      {mutationData?.updateEmployee?.message && !mutationData?.updateEmployee?.result && (
        <Typography paragraph color="secondary">{mutationData.updateEmployee.message}</Typography>
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
        <SelectEmployeeType
          id="employeetype"
          name="employeetype"
          label="Employee type"
          value={formik.values.employeetype}
          onChange={formik.handleChange}
          error={formik.touched.employeetype && Boolean(formik.errors.employeetype)}
          helperText={formik.touched.employeetype && formik.errors.employeetype}
          margin="normal"
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Modal>
  )
}

export default UpdateEmployee
