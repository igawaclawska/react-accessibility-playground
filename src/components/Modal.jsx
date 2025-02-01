import Button from "./Button";
import QuantityControls from "./QuantityControls";

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
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <p>Item(s) have been added to the cart:</p>
            <div style={styles.itemList}>
              <img
                src={selectedItem.product.imgSrc}
                alt={selectedItem.product.name}
                style={styles.itemImage}
              />
              <div>
                {selectedItem.product.name} - Quantity: {selectedItem.quantity}
              </div>
              <QuantityControls
                quantity={selectedItem.quantity}
                handleQuantityChange={handleQuantityChange}
              />
            </div>
            <div style={styles.modalButtons}>
              <Button variant="secondary" onClick={handleCloseModal}>
                Continue shopping
              </Button>
              <Button onClick={handleGoToCart}> Go to Cart</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: "2em",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  modalButtons: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "1em",
  },
  itemList: {
    textAlign: "left",
    marginTop: "1em",
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: "0.5em",
  },
  itemImage: {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    marginRight: "1em",
  },
};

export default Modal;
