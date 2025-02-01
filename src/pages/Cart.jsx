import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);

  const handleQuantityChange = (productId, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId
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
      borderRadius: "8px",
      marginBottom: "1em",
    },
    itemImage: {
      width: "100px",
      height: "100px",
      objectFit: "cover",
      borderRadius: "8px",
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
    quantityControls: {
      display: "flex",
      alignItems: "center",
    },
    quantityButton: {
      fontSize: "1.2em",
      padding: "0.2em 0.5em",
      margin: "0 0.5em",
      cursor: "pointer",
    },
    itemQuantity: {
      fontSize: "1.2em",
    },
    removeButton: {
      padding: "0.5em 1em",
      fontSize: "1em",
      cursor: "pointer",
      backgroundColor: "#ff4d4d",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      transition: "background-color 0.3s",
    },
    checkoutButton: {
      padding: "0.5em 1em",
      fontSize: "1.2em",
      cursor: "pointer",
      backgroundColor: "#4caf50",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      transition: "background-color 0.3s",
    },
  };

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
            <div style={styles.quantityControls}>
              <button
                onClick={() => handleQuantityChange(item.product.id, -1)}
                style={styles.quantityButton}
              >
                -
              </button>
              <span style={styles.itemQuantity}>{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.product.id, 1)}
                style={styles.quantityButton}
              >
                +
              </button>
            </div>
            <button
              onClick={() => handleRemoveItem(item.product.id)}
              style={styles.removeButton}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button onClick={handleCheckout} style={styles.checkoutButton}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
