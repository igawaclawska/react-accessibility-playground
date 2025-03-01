import styles from "./Fieldset.module.css";

const Fieldset = ({ children, legend }) => {
  return (
    <fieldset className={styles.fieldset}>
      {legend && <legend className={styles.legend}>{legend}</legend>}
      {children}
    </fieldset>
  );
};

export default Fieldset;
