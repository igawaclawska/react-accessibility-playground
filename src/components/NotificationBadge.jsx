import styles from "./NotificationBadge.module.css";

const NotificationBadge = ({ count }) => {
  return <span className={styles.badge}>{count}</span>;
};

export default NotificationBadge;
