import { validate } from "../utils/validation";
import useForm from "../hooks/useForm";
import Main from "../components/shared/Main";
import Heading from "../components/shared/Heading";
import Form from "../components/shared/Form";
import Fieldset from "../components/shared/Fieldset";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";

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
    <Main>
      <title>Checkout</title>
      <Heading>Checkout</Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset legend="Contact Details">
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
        </Fieldset>

        <Fieldset legend="Payment Information">
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
        </Fieldset>
        <Button type="submit">Buy Now</Button>
      </Form>
    </Main>
  );
};

export default Checkout;
