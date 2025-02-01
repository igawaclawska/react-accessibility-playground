import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContext";
import styles from "./TopNavigation.module.css";

const TopNavigation = () => {
  const { products, isLoading } = useContext(ProductsContext);

  if (isLoading) {
    return (
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>Loading...</li>
        </ul>
      </nav>
    );
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.navLinkActive}`
                : styles.navLink
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/all-products"
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.navLinkActive}`
                : styles.navLink
            }
          >
            All Products
          </NavLink>
        </li>
        {products.map((category) => (
          <li key={category.id}>
            <NavLink
              to={`/category/${category.id}`}
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.navLinkActive}`
                  : styles.navLink
              }
            >
              {category.name}
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.navLinkActive}`
                : styles.navLink
            }
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default TopNavigation;
