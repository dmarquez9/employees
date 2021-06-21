import { useFormik } from 'formik';

import * as yup from 'yup';
import { useMutation } from '@apollo/client';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import Modal from './Modal';
import { ADD_EMPLOYEES } from '../queries/Employees.queries';
import SelectEmployeeType from './SelectEmployeeType';

type CreateEmployeeTypeProps = {
  open: boolean;
  handleClose: () => void;
}

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Employee name is required'),
  employeetype: yup
    .string()
    .required('Employee type is required'),
});


const CreateEmployee: React.FC<CreateEmployeeTypeProps> = ({
  open,
  handleClose
}) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      employeetype: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      addEmployee({
        variables: {
          name: values.name,
          employeeTypeId: values.employeetype
        }
      })
    },
  });
  
  const [addEmployee, { data }] = useMutation(ADD_EMPLOYEES, {
    onCompleted: ({ createEmployee }) => {
      if (createEmployee?.result) {
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
      {data?.createEmployee?.message && !data?.createEmployee?.result && (
        <Typography paragraph color="secondary">{data.createEmployee.message}</Typography>
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

export default CreateEmployee
