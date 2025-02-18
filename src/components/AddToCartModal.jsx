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
      <h2>{`${product.name} has been added to the cart!`}</h2>
      <div className={styles.modalButtons}>
        <Button variant="secondary" onClick={handleCloseModal}>
          Continue shopping
        </Button>
        <Button onClick={handleGoToCart}>
          <ShoppingCartIcon ariaHidden="true" />
          Go to Cart
        </Button>
      </div>
    </Modal>
  );
};

export default AddToCartModal;
