import styles from "./Image.module.css";

const Image = ({
  src,
  alt,
  ariaLabel,
  ariaLabelledBy,
  className,
  size = "md",
}) => {
  const sizeClass = styles[`image-${size}`] || styles.image;
  return (
    <div className={styles.imageContainer}>
      <img
        src={src}
        alt={alt}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        className={`${styles.image} ${sizeClass} ${className}`}
      />
    </div>
  );
};

export default Image;
