import { useMutation } from '@apollo/client';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

import { DELETE_EMPLOYEE_TYPE } from '../queries/EmployeeTypes.queries';
import { EmployeeTypesProps } from '../types/EmployeeTypes.types';

type DeleteEmployeeTypeProps = {
  open: boolean;
  handleClose: () => void;
  data: EmployeeTypesProps;
}

export default function DeleteEmployeeType({
  open,
  handleClose,
  data
}: DeleteEmployeeTypeProps) {
  const [deleteEmployeeType] = useMutation(DELETE_EMPLOYEE_TYPE, {
    onCompleted: ({ deleteEmployeeType }) => {
      alert(deleteEmployeeType.message)
      handleClose()
    }
  });

  const handleDelete = () => {
    deleteEmployeeType({
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
      <DialogTitle id="alert-dialog-title">Are you sure to delete this employee type?</DialogTitle>
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
