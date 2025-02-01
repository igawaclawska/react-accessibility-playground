const Input = ({ label, type, id, name, value, onChange, isRequired }) => {
  return (
    <>
      <label style={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        style={styles.input}
        required={isRequired && isRequired}
      />
    </>
  );
};

const styles = {
  label: {
    display: "block",
    marginBottom: "0.5em",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "0.5em",
    fontSize: "1em",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
};

export default Input;
