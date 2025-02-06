import { validate } from "../utils/validation";
import useForm from "../hooks/useForm";
import Button from "../components/Button";
import Input from "../components/Input";
import styles from "./Checkout.module.css";

const Checkout = () => {
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

  const onSubmit = (e, data) => {
    e.preventDefault();
    console.log("Form submitted:", data);
  };

  return (
    <div className={styles.pageContainer}>
      <title>Checkout</title>
      <h2 className={styles.heading}>Checkout</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Input
          label="Name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          errorMessage={errors.name}
        />

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

        <Input
          label="Card Number"
          type="number"
          id="cardNumber"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          errorMessage={errors.cardNumber}
        />

        <Input
          label="Expiration Date"
          type="date"
          id="expirationDate"
          name="expirationDate"
          value={formData.expirationDate}
          onChange={handleChange}
          errorMessage={errors.expirationDate}
        />

        <Input
          label="CVV"
          type="number"
          id="cvv"
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
          errorMessage={errors.cvv}
        />

        <Button type="submit">Buy Now</Button>
      </form>
    </div>
  );
};

export default Checkout;
