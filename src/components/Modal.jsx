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
            <AutoFocusInside>
              <div role="dialog" className={styles.modal}>
                <h2>{`${product.name} has been added to the cart!`}</h2>

                <div className={styles.modalButtons}>
                  <Button variant="secondary" onClick={handleCloseModal}>
                    Continue shopping
                  </Button>
                  <Button
                    aria-hidden="true"
                    aria-label="Go to Cart"
                    onClick={handleGoToCart}
                  >
                    <ShoppingCartIcon />
                    Go to Cart
                  </Button>
                </div>
              </div>
            </AutoFocusInside>
          </div>
        </FocusLock>
      )}
    </>
  );
};

export default Modal;
