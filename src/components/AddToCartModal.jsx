import Button from "./shared/Button";
import ShoppingCartIcon from "./Icons/ShoppingCartIcon";
import styles from "./AddToCartModal.module.css";
import Modal from "./shared/Modal";

const AddToCartModal = ({
  showModal,
  handleGoToCart,
  handleCloseModal,
  product,
}) => {
  return (
    <Modal showModal={showModal}>
      <h1>{`${product.name} has been added to the cart!`}</h1>
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
    </Modal>
  );
};

export default AddToCartModal;
