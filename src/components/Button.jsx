import styles from "./Button.module.css";

const Button = ({
  children,
  onClick,
  variant = "primary",
  type = "button",
  hasPopup = false,
  ariaLabel,
}) => {
  const buttonClass = `${styles.button} ${styles[variant]}`;

  return (
    <button
      aria-haspopup={hasPopup}
      className={buttonClass}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
