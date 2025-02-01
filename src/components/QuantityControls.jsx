import Button from "./Button";

const QuantityControls = ({ quantity, handleQuantityChange }) => {
  return (
    <div style={styles.quantityControls}>
      <Button variant="secondary" onClick={() => handleQuantityChange(-1)}>
        -
      </Button>
      <span style={styles.itemQuantity}>{quantity}</span>
      <Button variant="secondary" onClick={() => handleQuantityChange(1)}>
        +
      </Button>
    </div>
  );
};

const styles = {
  quantityControls: {
    display: "flex",
    alignItems: "center",
  },
  itemQuantity: {
    fontSize: "1.2em",
  },
};

export default QuantityControls;
