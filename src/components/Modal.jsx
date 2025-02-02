import Button from "./Button";
import QuantityControls from "./QuantityControls";
import styles from "./Modal.module.css";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Modal = ({
  showModal,
  handleGoToCart,
  handleCloseModal,
  selectedItem,
  handleQuantityChange,
}) => {
  return (
    <>
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <p>Item(s) have been added to the cart:</p>
            <div className={styles.itemList}>
              <div className={styles.item}>
                <img
                  src={selectedItem.product.imgSrc}
                  alt={selectedItem.product.name}
                  className={styles.itemImage}
                />
                <div>{selectedItem.product.name}</div>
                <QuantityControls
                  quantity={selectedItem.quantity}
                  handleQuantityChange={handleQuantityChange}
                />
              </div>
            </div>
            <div className={styles.modalButtons}>
              <Button variant="secondary" onClick={handleCloseModal}>
                Continue shopping
              </Button>
              <Button onClick={handleGoToCart}>
                <ShoppingCartIcon />
                Go to Cart
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
