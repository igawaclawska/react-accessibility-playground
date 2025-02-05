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
  const helperId = helperText ? `${id}-helper` : "";
  const errorId = errorMessage ? `${id}-error` : "";
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
        aria-required={isRequired}
        aria-invalid={Boolean(errorMessage)}
        aria-describedby={`${helperId} ${errorId}`}
      />

      <div
        id={helperId}
        className={helperText ? styles.helperText : styles.invisible}
      >
        {helperText ? helperText : ""}
      </div>

      <div
        id={errorId}
        aria-live="polite"
        className={styles.errorMessageWrapper}
      >
        <span className={styles.errorMessage}>
          {errorMessage ? errorMessage : ""}
        </span>
      </div>
    </div>
  );
};

export default Input;
