import { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Button from "../components/Button";
import Input from "../components/Input";

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
          <Input
            label="Name"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isRequired={"required"}
          />
        </div>
        <div style={styles.formGroup}>
          <Input
            label="Address"
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            isRequired={"required"}
          />
        </div>
        <div style={styles.formGroup}>
          <Input
            label="City"
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            isRequired={"required"}
          />
        </div>
        <div style={styles.formGroup}>
          <Input
            label="ZIP Code"
            type="number"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            isRequired={"required"}
          />
        </div>
        <div style={styles.formGroup}>
          <Input
            label="Card Number"
            type="number"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            isRequired={"required"}
          />
        </div>
        <div style={styles.formGroup}>
          <Input
            label="Expiration Date"
            type="date"
            id="expirationDate"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            isRequired={"required"}
          />
        </div>
        <div style={styles.formGroup}>
          <Input
            label="CVV"
            type="number"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            isRequired={"required"}
          />
        </div>
        <Button type="submit">Buy Now</Button>
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
};

export default Checkout;
