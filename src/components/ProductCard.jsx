import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = ({ productName, imgSrc, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imgSrc} alt={productName} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{productName}</h3>
        <Link to={link} className={styles.link}>
          View Product
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
