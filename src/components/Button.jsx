import styles from "./Button.module.css";

const Button = ({
  children,
  onClick,
  variant = "primary",
  type = "button",
}) => {
  const buttonClass = `${styles.button} ${styles[variant]}`;

  return (
    <div className={buttonClass} type={type} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
