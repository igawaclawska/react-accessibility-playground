import { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Button from "../components/Button";
import Input from "../components/Input";
import styles from "./Checkout.module.css";

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
    <div className={styles.container}>
      <h2 className={styles.heading}>Checkout</h2>
      <div className={styles.summary}>
        <h3 className={styles.summaryHeading}>Order Summary</h3>
        {cart.map((item) => (
          <div key={item.product.id} className={styles.summaryItem}>
            <img
              src={item.product.imgSrc}
              alt={item.name}
              className={styles.itemImage}
            />
            <div className={styles.itemDetails}>
              <span className={styles.itemName}>{item.name}</span>
              <span className={styles.itemQuantity}>
                Quantity: {item.quantity}
              </span>
              <span className={styles.itemPrice}>
                ${item.product.price.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
        <div className={styles.total}>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
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
        <div className={styles.formGroup}>
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
        <div className={styles.formGroup}>
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
        <div className={styles.formGroup}>
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
        <div className={styles.formGroup}>
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
        <div className={styles.formGroup}>
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
        <div className={styles.formGroup}>
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

export default Checkout;
