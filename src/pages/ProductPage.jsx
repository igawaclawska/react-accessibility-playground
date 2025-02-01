import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useContext, useMemo } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { CartContext } from "../contexts/CartContext";
import Modal from "../components/Modal";
import Button from "../components/Button";
import styles from "./ProductPage.module.css";

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
    <div className={styles.productPage}>
      <header className={styles.productHeader}>
        <h1>{product.name}</h1>
        <p>Category: {categoryId}</p>
        <Link to={`/category/${categoryId}`} className={styles.backLink}>
          Back to Category
        </Link>
      </header>
      <div className={styles.productDetails}>
        <img
          src={product.imgSrc}
          alt={product.name}
          className={styles.productImage}
        />
        <div className={styles.productInfo}>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
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

export default ProductPage;
