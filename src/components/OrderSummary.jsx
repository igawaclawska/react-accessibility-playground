import styles from "./OrderSummary.module.css";

const OrderSummary = ({ cart, totalPrice }) => {
  return (
    <div className={styles.summary}>
      <h3 className={styles.summaryHeading}>Order Summary</h3>
      {cart.map((item) => (
        <div key={item.product.id} className={styles.summaryItem}>
          <img src={item.product.imgSrc} className={styles.itemImage} />
          <div className={styles.itemDetails}>
            <span className={styles.itemName}>{item.name}</span>
            <span className={styles.itemQuantity}>
              Quantity: {item.quantity}
            </span>
            <span className={styles.itemPrice}>
              ${item.product.price.toFixed(2)}
            </span>
          </div>
        </div>
      ))}
      <div className={styles.total}>
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default OrderSummary;
