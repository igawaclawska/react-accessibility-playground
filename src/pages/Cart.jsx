import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import Main from "../components/shared/Main";
import CartItem from "../components/CartItem";
import Button from "../components/shared/Button";
import ArrowRight from "../components/Icons/ArrowRight";
import styles from "./Cart.module.css";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removedProduct, setRemovedProduct } = useContext(CartContext);

  useEffect(() => {
    if (removedProduct) {
      const timer = setTimeout(() => setRemovedProduct(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [removedProduct]);

  const handleCheckout = () => {
    navigate("/checkout", { state: { cartItems: cart } });
  };

  const totalPrice = cart
    .reduce((total, item) => total + item.product.price * item.quantity, 0)
    .toFixed(2);

  return (
    <Main>
      <title>Your Cart</title>
      <h1 className={styles.heading}>
        {cart.length === 0 ? `Your Cart is empty` : `Your cart`}
      </h1>

      {cart.length !== 0 && (
        <div className={styles.totalPrice}>
          <h2 aria-live="polite">Total Price: ${totalPrice}</h2>
        </div>
      )}

      <div
        aria-live="polite"
        aria-relevant="removals text"
        className={styles.srOnly}
      >
        {removedProduct &&
          (cart.length === 0
            ? `${removedProduct} has been removed. Your cart is now empty.`
            : `${removedProduct} has been removed from the cart.`)}
      </div>

      <ul className={styles.cartItems}>
        {cart.map((item) => {
          return (
            <CartItem
              key={item.product.id}
              item={item}
              setRemovedProduct={setRemovedProduct}
            />
          );
        })}
      </ul>

      {cart.length !== 0 && (
        <Button onClick={handleCheckout}>
          Proceed to Checkout <ArrowRight ariaHidden="true" />
        </Button>
      )}
    </Main>
  );
};

export default Cart;
