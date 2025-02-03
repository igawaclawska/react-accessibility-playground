import { useState } from "react";

const useForm = (initialValues, validate) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (isSubmitted && validate) {
      const validationErrors = validate({ ...formData, [name]: value });
      setErrors(validationErrors);
    }
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const validationErrors = validate ? validate(formData) : {};
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      callback(formData);
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
