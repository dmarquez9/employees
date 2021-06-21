import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import MaterialModal from '@material-ui/core/Modal';


function getModalStyle() {
  return {
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

type ModalProps = {
  open: boolean;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ open, handleClose, children }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <MaterialModal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        {children}
      </div>
    </MaterialModal>
  );
}

export default Modal
