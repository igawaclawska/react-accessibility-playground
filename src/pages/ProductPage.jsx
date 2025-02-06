import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useContext, useMemo } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { CartContext } from "../contexts/CartContext";
import MainContent from "../components/MainContent";
import Modal from "../components/Modal";
import Button from "../components/Button";
import styles from "./ProductPage.module.css";
import ShoppingCartIcon from "../components/Icons/ShoppingCartIcon";

const ProductPage = () => {
  const { categoryId, productId } = useParams();
  const navigate = useNavigate();
  const { productsByCategory, isLoading } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const product = useMemo(() => {
    const categoryProducts = productsByCategory[categoryId] || [];
    return categoryProducts.find((prod) => prod.id === productId);
  }, [categoryId, productId, productsByCategory]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, 1);
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
    return <MainContent>Loading...</MainContent>;
  }

  if (!product) {
    return (
      <MainContent>
        <title>Product not found</title>Product not found.
      </MainContent>
    );
  }

  return (
    <MainContent>
      <title>{product.name}</title>
      <header className={styles.productHeader}>
        <Link to={`/category/${categoryId}`} className={styles.backLink}>
          Back to Category
        </Link>
        <h2>{product.name}</h2>
      </header>
      <div className={styles.productDetails}>
        <img src={product.imgSrc} className={styles.productImage} />
        <div className={styles.productInfo}>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
          <Button hasPopup={"dialog"} onClick={handleAddToCart}>
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
      />
    </MainContent>
  );
};

export default ProductPage;
