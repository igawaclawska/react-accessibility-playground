import FocusLock, { AutoFocusInside } from "react-focus-lock";
import Button from "./Button";
import ShoppingCartIcon from "./Icons/ShoppingCartIcon";
import styles from "./Modal.module.css";

const Modal = ({ showModal, handleGoToCart, handleCloseModal, product }) => {
  return (
    <>
      {showModal && (
        <FocusLock>
          <div className={styles.modalOverlay}>
            <div role="dialog" className={styles.modal}>
              <AutoFocusInside>
                <h1>{product.name} have been added to the cart!</h1>
              </AutoFocusInside>
              <div className={styles.modalButtons}>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Continue shopping
                </Button>
                <Button aria-label="Go to Cart" onClick={handleGoToCart}>
                  <ShoppingCartIcon />
                  Go to Cart
                </Button>
              </div>
            </div>
          </div>
        </FocusLock>
      )}
    </>
  );
};

export default Modal;
