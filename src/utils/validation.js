export const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email =
      "Oops! That doesn’t look like a valid email. Try again (e.g., name@example.com).";
  }
  if (!values.address) {
    errors.address = "Address is required";
  }
  if (!values.city) {
    errors.city = "City is required";
  }
  if (!values.zip) {
    errors.zip = "ZIP Code is required";
  } else if (!/^\d{5}$/.test(values.zip)) {
    errors.zip = "ZIP Code must be a 5-digit number";
  }
  if (!values.cardNumber) {
    errors.cardNumber = "Card Number is required";
  }
  if (!values.expirationDate) {
    errors.expirationDate = "Expiration Date is required";
  }
  if (!values.cvv) {
    errors.cvv = "CVV is required";
  }
  return errors;
};
