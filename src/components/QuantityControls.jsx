import Button from "./shared/Button";
import AddIcon from "./Icons/AddIcon";
import SubtractIcon from "./Icons/SubtractIcon";
import styles from "./QuantityControls.module.css";

const QuantityControls = ({ quantity, product, handleQuantityChange }) => {
  return (
    <div className={styles.quantityControls}>
      <Button
        ariaLabel={"Decrease quantity by 1"}
        variant="secondary"
        onClick={() => handleQuantityChange(-1)}
      >
        <SubtractIcon aria-hidden="true" />
      </Button>
      <div
        role="status"
        aria-live="polite"
        aria-label={`You have now ${quantity} elements of name ${product.name}`}
        className={styles.itemQuantity}
      >
        <span aria-hidden="true"> {quantity}</span>
      </div>
      <Button
        ariaLabel={"Increase quantity by 1"}
        variant="secondary"
        onClick={() => handleQuantityChange(1)}
      >
        <AddIcon aria-hidden="true" />
      </Button>
    </div>
  );
};

export default QuantityControls;
