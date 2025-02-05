import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = ({
  productName,
  imgSrc,
  link,
  price,
  category,
  headingLevel = "h3",
}) => {
  const HeadingTag = headingLevel;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imgSrc} alt={productName} className={styles.image} />
        {category && <div className={styles.category}>{category}</div>}
      </div>
      <div className={styles.content}>
        <HeadingTag className={styles.title}>{productName}</HeadingTag>
        <p className={styles.price}>${price.toFixed(2)}</p>
        <Link to={link} className={styles.link}>
          View Product
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
