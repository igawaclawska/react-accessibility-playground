import ModalMui from "@mui/material/Modal";
import Box from "@mui/material/Box";
import styles from "./Modal.module.css";

const Modal = ({ children, openModal, onClose }) => {
  return (
    <ModalMui open={openModal} onClose={onClose}>
      <Box className={styles.modalBox}>{children}</Box>
    </ModalMui>
  );
};

export default Modal;
