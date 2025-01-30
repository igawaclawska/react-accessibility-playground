import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  // Sample cart items
  const initialCartItems = [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      quantity: 2,
      imgSrc:
        "https://images.unsplash.com/photo-1738070593158-9e84a49e7e60?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Product 2",
      price: 49.99,
      quantity: 1,
      imgSrc:
        "https://images.unsplash.com/photo-1738070593158-9e84a49e7e60?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Product 3",
      price: 19.99,
      quantity: 3,
      imgSrc:
        "https://images.unsplash.com/photo-1738070593158-9e84a49e7e60?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Handle quantity change
  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  // Handle item removal
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Handle checkout
  const handleCheckout = () => {
    navigate("/checkout", { state: { cartItems } });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Shopping Cart</h2>
      <div style={styles.cartItems}>
        {cartItems.map((item) => (
          <div key={item.id} style={styles.cartItem}>
            <img src={item.imgSrc} alt={item.name} style={styles.itemImage} />
            <span style={styles.itemName}>{item.name}</span>
            <span style={styles.itemPrice}>${item.price.toFixed(2)}</span>
            <div style={styles.quantityControls}>
              <button
                onClick={() => handleQuantityChange(item.id, -1)}
                style={styles.quantityButton}
              >
                -
              </button>
              <span style={styles.itemQuantity}>{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, 1)}
                style={styles.quantityButton}
              >
                +
              </button>
            </div>
            <button
              onClick={() => handleRemoveItem(item.id)}
              style={styles.removeButton}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div style={styles.total}>
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>
      <button onClick={handleCheckout} style={styles.checkoutButton}>
        Proceed to Checkout
      </button>
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
    borderBottom: "1px solid #ddd",
    marginBottom: "1em",
  },
  itemImage: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    marginRight: "1em",
  },
  itemName: {
    fontSize: "1.2em",
    flex: "1",
  },
  itemPrice: {
    fontSize: "1.2em",
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
    fontSize: "1em",
    padding: "0.5em",
    marginLeft: "1em",
    cursor: "pointer",
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
  },
  total: {
    marginTop: "2em",
  },
  checkoutButton: {
    fontSize: "1.2em",
    padding: "0.5em 1em",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    marginTop: "1em",
  },
};

export default Cart;
