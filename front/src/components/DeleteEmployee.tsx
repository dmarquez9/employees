import { useMutation } from '@apollo/client';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

import { DELETE_EMPLOYEES } from '../queries/Employees.queries';
import { EmployeesProps } from '../types/Employees.types';

type DeleteEmployeeProps = {
  open: boolean;
  handleClose: () => void;
  data: EmployeesProps;
}

export default function DeleteEmployee({
  open,
  handleClose,
  data
}: DeleteEmployeeProps) {
  const [deleteEmployee] = useMutation(DELETE_EMPLOYEES, {
    onCompleted: ({ deleteEmployee }) => {
      alert(deleteEmployee.message)
      handleClose()
    }
  });

  const handleDelete = () => {
    deleteEmployee({
      variables: {
        id: data.id
      }
    })
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle id="alert-dialog-title">Are you sure to delete this employee?</DialogTitle>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
        <Button onClick={() => handleDelete()} color="secondary" autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
