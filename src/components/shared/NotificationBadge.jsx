import styles from "./NotificationBadge.module.css";

const NotificationBadge = ({ count }) => {
  return (
    <span className={styles.badge}>
      <span aria-hidden="true">{count}</span>
      <span aria-live="polite" className={styles.srOnly}>
        Total number of the elements in your cart is {count}
      </span>
    </span>
  );
};

export default NotificationBadge;
