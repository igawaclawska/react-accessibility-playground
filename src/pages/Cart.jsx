import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import Button from "../components/Button";
import DeleteIcon from "../components/DeleteIcon";
import QuantityControls from "../components/QuantityControls";
import styles from "./Cart.module.css";
import ArrowRight from "../components/ArrowRight";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);

  const handleQuantityChange = (itemId, delta) => {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.product.id === itemId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.id !== productId)
    );
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { cartItems: cart } });
  };

  if (cart.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Shopping Cart</h2>
      <div className={styles.cartItems}>
        {cart.map((item) => (
          <div key={item.product.id} className={styles.cartItem}>
            <img
              src={item.product.imgSrc}
              alt={item.product.name}
              className={styles.itemImage}
            />
            <span className={styles.itemName}>{item.product.name}</span>
            <span className={styles.itemPrice}>
              ${item.product.price.toFixed(2)}
            </span>
            <QuantityControls
              quantity={item.quantity}
              handleQuantityChange={(delta) =>
                handleQuantityChange(item.product.id, delta)
              }
            />
            <Button
              variant="secondary"
              onClick={() => handleRemoveItem(item.product.id)}
            >
              <DeleteIcon />
              Remove
            </Button>
          </div>
        ))}
      </div>
      <Button onClick={handleCheckout}>
        {" "}
        Proceed to Checkout <ArrowRight />
      </Button>
    </div>
  );
};

export default Cart;
