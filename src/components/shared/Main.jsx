import styles from "./Main.module.css";

const Main = ({ children }) => {
  return <main className={styles.pageContainer}>{children}</main>;
};

export default Main;
