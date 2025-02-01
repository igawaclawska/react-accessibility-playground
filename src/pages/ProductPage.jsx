import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useContext, useMemo } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { CartContext } from "../contexts/CartContext";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ProductPage = () => {
  const { categoryId, productId } = useParams();
  const navigate = useNavigate();
  const { products, isLoading } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  const product = useMemo(() => {
    if (categoryId === "all-products") {
      for (const category of products) {
        const foundProduct = category.products.find(
          (prod) => prod.id === productId
        );
        if (foundProduct) return foundProduct;
      }
    } else {
      const category = products.find((cat) => cat.id === categoryId);
      if (category) {
        return category.products.find((prod) => prod.id === productId);
      }
    }
    return null;
  }, [categoryId, productId, products]);

  const handleQuantityChange = (delta) => {
    setSelectedItem({
      ...selectedItem,
      quantity: Math.max(1, selectedItem.quantity + delta),
    });
  };

  const handleAddToCart = () => {
    if (product) {
      setSelectedItem({ product: { ...product }, quantity: 1 });
      setShowModal(true);
      console.log("SelectedItem", selectedItem);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleGoToCart = () => {
    addToCart(product, selectedItem.quantity);
    navigate("/cart");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div style={styles.productPage}>
      <header style={styles.productHeader}>
        <h1>{product.name}</h1>
        <p>Category: {categoryId}</p>
        <Link to={`/category/${categoryId}`} style={styles.backLink}>
          Back to Category
        </Link>
      </header>
      <div style={styles.productDetails}>
        <img
          src={product.imgSrc}
          alt={product.name}
          style={styles.productImage}
        />
        <div style={styles.productInfo}>
          <p style={styles.productDescription}>{product.description}</p>
          <p style={styles.productPrice}>${product.price.toFixed(2)}</p>
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      </div>

      <Modal
        showModal={showModal}
        handleGoToCart={handleGoToCart}
        handleCloseModal={handleCloseModal}
        selectedItem={selectedItem}
        handleQuantityChange={handleQuantityChange}
      />
    </div>
  );
};

const styles = {
  productPage: {
    padding: "2em",
    textAlign: "center",
  },
  productHeader: {
    marginBottom: "2em",
  },
  backLink: {
    display: "inline-block",
    marginTop: "1em",
    textDecoration: "none",
    color: "#646cff",
    fontWeight: "bold",
    transition: "color 0.3s",
  },
  productDetails: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2em",
  },
  productImage: {
    width: "300px",
    height: "300px",
    objectFit: "cover",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  productInfo: {
    maxWidth: "400px",
    textAlign: "left",
  },
  productDescription: {
    fontSize: "1.2em",
    marginBottom: "1em",
  },
  productPrice: {
    fontSize: "1.5em",
    fontWeight: "bold",
    marginBottom: "1em",
  },
};

export default ProductPage;
