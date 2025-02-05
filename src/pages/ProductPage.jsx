import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useContext, useMemo } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { CartContext } from "../contexts/CartContext";
import Modal from "../components/Modal";
import Button from "../components/Button";
import styles from "./ProductPage.module.css";
import ShoppingCartIcon from "../components/Icons/ShoppingCartIcon";

const ProductPage = () => {
  const { categoryId, productId } = useParams();
  const navigate = useNavigate();
  const { productsByCategory, isLoading } = useContext(ProductsContext);
  const { addToCart, handleQuantityChange } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [addedQuantity, setAddedQuantity] = useState(1);

  const product = useMemo(() => {
    const categoryProducts = productsByCategory[categoryId] || [];
    return categoryProducts.find((prod) => prod.id === productId);
  }, [categoryId, productId, productsByCategory]);

  const handleProductQuantityChange = (productId, delta) => {
    setAddedQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
    handleQuantityChange(productId, delta);
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, addedQuantity);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setAddedQuantity(1);
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  if (isLoading) {
    return <main className={styles.productPage}>Loading...</main>;
  }

  if (!product) {
    return (
      <main className={styles.productPage}>
        <title>Product not found</title>Product not found.
      </main>
    );
  }

  return (
    <main className={styles.productPage}>
      <title>{product.name}</title>
      <header className={styles.productHeader}>
        <Link to={`/category/${categoryId}`} className={styles.backLink}>
          Back to Category
        </Link>
        <h1>{product.name}</h1>
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
          <Button onClick={handleAddToCart}>
            <ShoppingCartIcon />
            Add to Cart
          </Button>
        </div>
      </div>

      <Modal
        showModal={showModal}
        handleGoToCart={handleGoToCart}
        handleCloseModal={handleCloseModal}
        product={product}
        addedQuantity={addedQuantity}
        handleQuantityChange={handleProductQuantityChange}
      />
    </main>
  );
};

export default ProductPage;
