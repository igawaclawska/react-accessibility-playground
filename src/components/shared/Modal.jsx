import FocusLock, { AutoFocusInside } from "react-focus-lock";
import styles from "./Modal.module.css";

const Modal = ({ children, showModal }) => {
  return (
    <>
      {showModal && (
        <FocusLock>
          <div className={styles.modalOverlay}>
            <AutoFocusInside>
              <div role="dialog" className={styles.modal}>
                {children}
              </div>
            </AutoFocusInside>
          </div>
        </FocusLock>
      )}
    </>
  );
};

export default Modal;
