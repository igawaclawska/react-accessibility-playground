import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import Button from "../components/Button";
import DeleteIcon from "../components/icons/DeleteIcon";
import QuantityControls from "../components/QuantityControls";
import ArrowRight from "../components/Icons/ArrowRight";
import styles from "./Cart.module.css";

const Cart = () => {
  const navigate = useNavigate();
  const [removedProduct, setRemovedProduct] = useState(null);
  const { cart, handleRemoveItem, handleQuantityChange } =
    useContext(CartContext);

  const handleRemove = (productId) => {
    const product = cart.find((item) => item.product.id === productId);
    handleRemoveItem(productId);
    setRemovedProduct(product.product.name);
  };

  useEffect(() => {
    if (removedProduct) {
      const timer = setTimeout(() => setRemovedProduct(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [removedProduct]);

  const handleCheckout = () => {
    navigate("/checkout", { state: { cartItems: cart } });
  };

  const totalPrice = cart
    .reduce((total, item) => total + item.product.price * item.quantity, 0)
    .toFixed(2);

  if (cart.length === 0) {
    return (
      <div className={styles.pageContainer}>
        <title>Your Cart</title>
        <h2>Your cart is empty.</h2>
        <div aria-live="polite" aria-atomic="true" className={styles.srOnly}>
          {removedProduct &&
            `${removedProduct} has been removed from the cart. Your cart is now empty.`}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <title>Your Cart</title>
      <h2 className={styles.heading}>Your Cart</h2>
      <div className={styles.totalPrice}>
        <h2 aria-live="polite">Total Price: ${totalPrice}</h2>
      </div>
      <div aria-live="polite" className={styles.srOnly}>
        {removedProduct && `${removedProduct} has been removed from the cart.`}
      </div>
      <div className={styles.cartItems}>
        {cart.map((item) => {
          const itemTotalPrice = (item.product.price * item.quantity).toFixed(
            2
          );
          return (
            <li key={item.product.id} className={styles.cartItem}>
              <img src={item.product.imgSrc} className={styles.itemImage} />
              <span className={styles.itemName}>{item.product.name}</span>
              <span className={styles.itemPrice}>
                {item.product.price.toFixed(2)} x {item.quantity} = $
                {itemTotalPrice}
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
                onClick={() => handleRemove(item.product.id)}
              >
                <DeleteIcon />
                Remove
              </Button>
            </li>
          );
        })}
      </div>
      <Button onClick={handleCheckout}>
        Proceed to Checkout <ArrowRight />
      </Button>
    </div>
  );
};

export default Cart;
