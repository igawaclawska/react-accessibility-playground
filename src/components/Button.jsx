import styles from "./Button.module.css";

const Button = ({
  children,
  onClick,
  variant = "primary",
  type = "button",
}) => {
  const buttonClass = `${styles.button} ${styles[variant]}`;

  return (
    <button className={buttonClass} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
