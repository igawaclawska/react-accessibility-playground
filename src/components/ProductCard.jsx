import { Link } from "react-router-dom";

const ProductCard = ({ productName, imgSrc, link }) => {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={imgSrc} alt={productName} style={styles.image} />
      </div>
      <div style={styles.content}>
        <h3 style={styles.title}>{productName}</h3>
        <Link to={link} style={styles.link}>
          View Product
        </Link>
      </div>
    </div>
  );
};

const styles = {
  card: {
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
    margin: "1em",
    minWidth: "300px",
    flex: 1,
  },
  imageContainer: {
    overflow: "hidden",
    position: "relative",
    "&:hover img": {
      transform: "scale(1.1)",
    },
  },
  image: {
    width: "100%",
    height: "24rem",
    objectFit: "cover",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  content: {
    padding: "1em",
    textAlign: "center",
  },
  title: {
    fontSize: "1.2em",
    margin: "0.5em 0",
  },
  link: {
    textDecoration: "none",
    color: "#646cff",
    fontWeight: "bold",
    transition: "color 0.3s",
  },
  imageContainerHover: {
    ":hover img": {
      transform: "scale(1.1)",
    },
  },
};

export default ProductCard;
