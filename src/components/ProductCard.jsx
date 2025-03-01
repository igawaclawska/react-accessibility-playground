import { Link } from "react-router-dom";
import Image from "./shared/Image";
import styles from "./ProductCard.module.css";

const ProductCard = ({
  name,
  imgSrc,
  link,
  price,
  alt,
  headingLevel = "h3",
}) => {
  const HeadingTag = headingLevel;

  return (
    <li className={styles.card}>
      <Image
        src={imgSrc}
        alt={alt}
        className={styles.image}
        size="fit-parent"
      />
      <div className={styles.content}>
        <HeadingTag className={styles.title}>{name}</HeadingTag>
        <p className={styles.price}>${price.toFixed(2)}</p>
        <Link
          to={link}
          aria-label={`View product: ${name}`}
          className={styles.link}
        >
          View Product
        </Link>
      </div>
    </li>
  );
};

export default ProductCard;
