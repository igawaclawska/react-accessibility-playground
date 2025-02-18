import FocusLock from "react-focus-lock";
import styles from "./Modal.module.css";

//TODO: Reimplement the Modal component
const Modal = ({ children, showModal }) => {
  return (
    <>
      {showModal && (
        <div className={styles.modalOverlay}>
          <FocusLock>
            <div role="dialog" aria-modal="true" className={styles.modal}>
              {children}
            </div>
          </FocusLock>
        </div>
      )}
    </>
  );
};

export default Modal;
