import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useContext, useMemo } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { CartContext } from "../contexts/CartContext";
import Main from "../components/shared/Main";
import AddToCartModal from "../components/AddToCartModal";
import Button from "../components/shared/Button";
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
    return (
      <Main>
        <div aria-busy="true">Loading...</div>
      </Main>
    );
  }

  if (!product && !isLoading) {
    return (
      <Main>
        <title>Product not found</title>
        <h1>Product not found.</h1>
      </Main>
    );
  }

  return (
    <Main>
      <title>{product?.name}</title>
      <header className={styles.productHeader}>
        <Link to={`/category/${categoryId}`} className={styles.backLink}>
          Back to Category
        </Link>
        <h1>{product?.name}</h1>
      </header>
      <div className={styles.productDetails}>
        <img src={product?.imgSrc} alt="" className={styles.productImage} />
        <div className={styles.productInfo}>
          <p className={styles.productDescription}>{product?.description}</p>
          <p className={styles.productPrice}>${product?.price.toFixed(2)}</p>
          <Button hasPopup={"dialog"} onClick={handleAddToCart}>
            <ShoppingCartIcon />
            Add to Cart
          </Button>
        </div>
      </div>

      <AddToCartModal
        showModal={showModal}
        handleGoToCart={handleGoToCart}
        handleCloseModal={handleCloseModal}
        product={product}
      />
    </Main>
  );
};

export default ProductPage;
