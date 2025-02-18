import Button from "./shared/Button";
import AddIcon from "./Icons/AddIcon";
import SubtractIcon from "./Icons/SubtractIcon";
import styles from "./QuantityControls.module.css";

const QuantityControls = ({ quantity, product, handleQuantityChange }) => {
  return (
    <div className={styles.quantityControls}>
      <Button
        variant="secondary"
        ariaLabel="Decrease quantity by 1"
        onClick={() => handleQuantityChange(-1)}
      >
        <SubtractIcon ariaHidden="true" />
      </Button>
      <div aria-live="polite" className={styles.itemQuantity}>
        <span aria-hidden="true">{quantity}</span>
        <span id="quantity" className={styles.srOnly}>
          {`You now have ${quantity} ${product.name}(s).`}
        </span>
      </div>
      <Button
        variant="secondary"
        ariaLabel="Increase quantity by 1"
        onClick={() => handleQuantityChange(1)}
      >
        <AddIcon ariaHidden="true" />
      </Button>
    </div>
  );
};

export default QuantityControls;
