import styles from "./Image.module.css";

const Image = ({ src, alt, className, size = "md" }) => {
  const sizeClass = styles[`image-${size}`] || styles.image;
  const stylingClasses = `${styles.image} ${sizeClass} ${className}`;
  const altDescription = alt ? alt : "";

  return (
    <div className={styles.imageContainer}>
      <img src={src} alt={altDescription} className={stylingClasses} />
    </div>
  );
};

export default Image;
