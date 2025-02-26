import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import QuantityControls from "../components/QuantityControls";
import Button from "../components/shared/Button";
import DeleteIcon from "../components/icons/DeleteIcon";
import styles from "./CartItem.module.css";

const CartItem = ({ item }) => {
  const { handleRemoveItem, handleQuantityChange, setRemovedProduct } =
    useContext(CartContext);
  const itemTotalPrice = (item.product.price * item.quantity).toFixed(2);

  const handleRemove = () => {
    handleRemoveItem(item.product.id);
    setRemovedProduct(item.product.name);
  };

  return (
    <li key={item.product.id} className={styles.cartItem}>
      <img src={item.product.imgSrc} alt="" className={styles.itemImage} />
      <span className={styles.itemName}>{item.product.name}</span>
      <span className={styles.itemPrice}>
        {item.product.price.toFixed(2)} x {item.quantity} = ${itemTotalPrice}
      </span>
      <QuantityControls
        {...item}
        handleQuantityChange={(delta) =>
          handleQuantityChange(item.product.id, delta)
        }
      />
      <Button
        variant="secondary"
        ariaLabel={`Remove ${item.product.name} from cart`}
        onClick={() => handleRemove()}
      >
        <DeleteIcon ariaHidden="true" />
        Remove
      </Button>
    </li>
  );
};

export default CartItem;
