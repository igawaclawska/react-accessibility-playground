import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { validate } from "../utils/validation";
import OrderSummary from "../components/OrderSummary";
import Button from "../components/Button";
import Input from "../components/Input";
import useForm from "../hooks/useForm";
import styles from "./Checkout.module.css";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const initialFormData = {
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  };

  const { formData, errors, handleChange, handleSubmit } = useForm(
    initialFormData,
    validate
  );

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  console.log("Checkout cart:", cart);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Checkout</h2>
      <OrderSummary cart={cart} totalPrice={totalPrice} />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <Input
            label="Name"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            errorMessage={errors.name}
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
            errorMessage={errors.address}
          />
        </div>
        <div className={styles.formGroup}>
          <Input
            label="Email"
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            helperText={"Use a valid email format (e.g., name@example.com)"}
            errorMessage={errors.email}
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
            errorMessage={errors.city}
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
            errorMessage={errors.zip}
            helperText={"Please use a 5-digit zip code (e.g., 12345)"}
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
            errorMessage={errors.cardNumber}
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
            errorMessage={errors.expirationDate}
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
            errorMessage={errors.cvv}
          />
        </div>
        <Button type="submit">Buy Now</Button>
      </form>
    </div>
  );
};

export default Checkout;
