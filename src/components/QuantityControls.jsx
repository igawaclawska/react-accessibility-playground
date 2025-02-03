import Button from "./Button";
import AddIcon from "./Icons/AddIcon";
import SubtractIcon from "./Icons/SubtractIcon";
import styles from "./QuantityControls.module.css";

const QuantityControls = ({ quantity, handleQuantityChange }) => {
  return (
    <div className={styles.quantityControls}>
      <Button variant="secondary" onClick={() => handleQuantityChange(-1)}>
        <SubtractIcon />
      </Button>
      <span className={styles.itemQuantity}>{quantity}</span>
      <Button variant="secondary" onClick={() => handleQuantityChange(1)}>
        <AddIcon />
      </Button>
    </div>
  );
};

export default QuantityControls;
