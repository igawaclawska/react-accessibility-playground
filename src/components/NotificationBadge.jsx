import styles from "./NotificationBadge.module.css";

const NotificationBadge = ({ count }) => {
  return (
    <span id="cart-info" className={styles.badge}>
      <span>{count}</span>
    </span>
  );
};

export default NotificationBadge;
