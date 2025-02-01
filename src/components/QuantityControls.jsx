import Button from "./Button";
import styles from "./QuantityControls.module.css";

const QuantityControls = ({ quantity, handleQuantityChange }) => {
  return (
    <div className={styles.quantityControls}>
      <Button variant="secondary" onClick={() => handleQuantityChange(-1)}>
        -
      </Button>
      <span className={styles.itemQuantity}>{quantity}</span>
      <Button variant="secondary" onClick={() => handleQuantityChange(1)}>
        +
      </Button>
    </div>
  );
};

export default QuantityControls;
