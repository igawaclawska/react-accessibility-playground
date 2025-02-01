import React, { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  console.log("Checkout cart:", cart);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Checkout</h2>
      <div style={styles.summary}>
        <h3 style={styles.summaryHeading}>Order Summary</h3>
        {cart.map((item) => (
          <div key={item.product.id} style={styles.summaryItem}>
            <img
              src={item.product.imgSrc}
              alt={item.name}
              style={styles.itemImage}
            />
            <div style={styles.itemDetails}>
              <span style={styles.itemName}>{item.name}</span>
              <span style={styles.itemQuantity}>Quantity: {item.quantity}</span>
              <span style={styles.itemPrice}>
                ${item.product.price.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
        <div style={styles.total}>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
      </div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="address">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="city">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="state">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="zip">
            ZIP Code
          </label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="cardNumber">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="expirationDate">
            Expiration Date
          </label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="cvv">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.submitButton}>
          Buy Now
        </button>
      </form>
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
  summary: {
    marginBottom: "2em",
  },
  summaryHeading: {
    fontSize: "1.5em",
    marginBottom: "1em",
  },
  summaryItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1em",
  },
  itemImage: {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    marginRight: "1em",
  },
  itemDetails: {
    flex: "1",
    textAlign: "left",
  },
  itemName: {
    display: "block",
    fontSize: "1.2em",
  },
  itemQuantity: {
    display: "block",
    fontSize: "1em",
  },
  itemPrice: {
    display: "block",
    fontSize: "1em",
  },
  total: {
    marginTop: "1em",
    fontSize: "1.5em",
  },
  form: {
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "left",
  },
  formGroup: {
    marginBottom: "1em",
  },
  label: {
    display: "block",
    marginBottom: "0.5em",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "0.5em",
    fontSize: "1em",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  submitButton: {
    padding: "0.5em 1em",
    fontSize: "1.2em",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    marginTop: "1em",
  },
};

export default Checkout;
