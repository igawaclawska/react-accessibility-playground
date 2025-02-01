import styles from "./Input.module.css";

const Input = ({ label, type, id, name, value, onChange, isRequired }) => {
  return (
    <>
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
    </>
  );
};

export default Input;
