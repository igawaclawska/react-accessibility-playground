import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import Button from "../components/Button";
import QuantityControls from "../components/QuantityControls";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);

  console.log("Cart:", cart);

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
    <div style={styles.container}>
      <h2 style={styles.heading}>Shopping Cart</h2>
      <div style={styles.cartItems}>
        {cart.map((item) => (
          <div key={item.product.id} style={styles.cartItem}>
            <img
              src={item.product.imgSrc}
              alt={item.product.name}
              style={styles.itemImage}
            />
            <span style={styles.itemName}>{item.product.name}</span>
            <span style={styles.itemPrice}>
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
              Remove
            </Button>
          </div>
        ))}
      </div>
      <Button onClick={handleCheckout}> Proceed to Checkout</Button>
    </div>
  );
};

const styles = {
  container: {
    padding: "2em",
    textAlign: "center",
  },
  heading: {
    fontSize: "2em",
    marginBottom: "1em",
  },
  cartItems: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    padding: "1em",
    border: "1px solid #ccc",
    marginBottom: "1em",
  },
  itemImage: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
  },
  itemName: {
    flex: 1,
    marginLeft: "1em",
    textAlign: "left",
    fontSize: "1.2em",
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: "1em",
    color: "#888",
  },
};

export default Cart;
