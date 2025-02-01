import { useState } from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  type = "button",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    ...styles.button,
    ...(variant === "primary"
      ? isHovered
        ? styles.primaryHover
        : styles.primary
      : isHovered
      ? styles.secondaryHover
      : styles.secondary),
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

const styles = {
  button: {
    padding: "0.5em 1em",
    fontSize: "1em",
    cursor: "pointer",
    border: "none",
    borderRadius: "0",
    transition: "background-color 0.3s, color 0.3s",
    margin: "1em",
  },
  primary: {
    backgroundColor: "#000",
    color: "#fff",
    border: "2px solid #000",
  },
  primaryHover: {
    backgroundColor: "#333",
    color: "#fff",
    border: "2px solid #000",
  },
  secondary: {
    backgroundColor: "transparent",
    color: "#000",
    border: "2px solid #000",
  },
  secondaryHover: {
    backgroundColor: "#000",
    color: "#fff",
    border: "2px solid #000",
  },
};

export default Button;
