import styles from "./Input.module.css";

const Input = ({
  label,
  type,
  id,
  name,
  value,
  onChange,
  isRequired,
  helperText,
  errorMessage,
}) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={styles.input}
        required={isRequired}
      />
      {helperText && <p className={styles.helperText}>{helperText}</p>}
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};

export default Input;
