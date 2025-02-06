import styles from "./MainContent.module.css";

const MainContent = ({ children }) => {
  return <div className={styles.pageContainer}>{children}</div>;
};

export default MainContent;
