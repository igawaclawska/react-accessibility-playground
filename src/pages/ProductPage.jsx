import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useContext, useMemo } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { CartContext } from "../contexts/CartContext";
import Modal from "../components/Modal";
import Button from "../components/Button";
import styles from "./ProductPage.module.css";
import ShoppingCartIcon from "../components/ShoppingCartIcon";

const ProductPage = () => {
  const { categoryId, productId } = useParams();
  const navigate = useNavigate();
  const { products, isLoading } = useContext(ProductsContext);
  const { cart, addToCart, setCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [addedQuantity, setAddedQuantity] = useState(1);

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

  const handleQuantityChange = (productId, delta) => {
    setAddedQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleAddToCart = () => {
    if (product) {
      const existingProduct = cart.find(
        (item) => item.product.id === product.id
      );
      if (existingProduct) {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + addedQuantity }
              : item
          )
        );
      } else {
        addToCart(product, addedQuantity);
      }
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
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className={styles.productPage}>
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
        handleQuantityChange={handleQuantityChange}
      />
    </div>
  );
};

export default ProductPage;
