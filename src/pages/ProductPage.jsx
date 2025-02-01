import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { CartContext } from "../contexts/CartContext";

const ProductPage = () => {
  const { categoryId, productId } = useParams();
  const navigate = useNavigate();
  const { products, isLoading } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchProduct = () => {
      let foundProduct = null;
      if (categoryId === "all-products") {
        for (const category of products) {
          foundProduct = category.products.find(
            (prod) => prod.id === productId
          );
          if (foundProduct) break;
        }
      } else {
        const category = products.find((cat) => cat.id === categoryId);
        if (category) {
          foundProduct = category.products.find(
            (prod) => prod.id === productId
          );
        }
      }
      setProduct(foundProduct);
    };

    fetchProduct();
  }, [categoryId, productId, products]);

  const handleQuantityChange = (delta) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

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
      borderRadius: "8px",
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
    quantityControls: {
      display: "flex",
      alignItems: "center",
      marginBottom: "1em",
    },
    quantityButton: {
      fontSize: "1.2em",
      padding: "0.2em 0.5em",
      margin: "0 0.5em",
      cursor: "pointer",
    },
    quantity: {
      fontSize: "1.2em",
    },
    addToCartButton: {
      padding: "0.5em 1em",
      fontSize: "1.2em",
      cursor: "pointer",
      backgroundColor: "#4caf50",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      transition: "background-color 0.3s",
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    modal: {
      backgroundColor: "#fff",
      padding: "2em",
      borderRadius: "8px",
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    modalButtons: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "1em",
    },
    modalButton: {
      padding: "0.5em 1em",
      fontSize: "1em",
      cursor: "pointer",
      backgroundColor: "#4caf50",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      transition: "background-color 0.3s",
    },
  };

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
          <div style={styles.quantityControls}>
            <button
              onClick={() => handleQuantityChange(-1)}
              style={styles.quantityButton}
            >
              -
            </button>
            <span style={styles.quantity}>{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              style={styles.quantityButton}
            >
              +
            </button>
          </div>
          <button onClick={handleAddToCart} style={styles.addToCartButton}>
            Add to Cart
          </button>
        </div>
      </div>

      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <p>Item has been added to the cart.</p>
            <div style={styles.modalButtons}>
              <button onClick={handleCloseModal} style={styles.modalButton}>
                Continue shopping
              </button>
              <button onClick={handleGoToCart} style={styles.modalButton}>
                Go to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
