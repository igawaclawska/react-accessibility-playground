import Button from "./Button";
import QuantityControls from "./QuantityControls";
import ShoppingCartIcon from "./Icons/ShoppingCartIcon";
import styles from "./Modal.module.css";

const Modal = ({
  showModal,
  handleGoToCart,
  handleCloseModal,
  product,
  addedQuantity,
  handleQuantityChange,
}) => {
  const totalPrice = (product.price * addedQuantity).toFixed(2);

  return (
    <>
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h1>Item(s) have been added to the cart:</h1>
            <div className={styles.itemList}>
              <div className={styles.item}>
                <img
                  src={product.imgSrc}
                  alt={product.name}
                  className={styles.itemImage}
                />
                <div>{product.name}</div>
                <QuantityControls
                  quantity={addedQuantity}
                  handleQuantityChange={(delta) =>
                    handleQuantityChange(product.id, delta)
                  }
                />
                <p className={styles.totalPrice}>Total Price: ${totalPrice}</p>
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
