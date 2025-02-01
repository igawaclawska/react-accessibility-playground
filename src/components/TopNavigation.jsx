import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContext";

const TopNavigation = () => {
  const { products, isLoading } = useContext(ProductsContext);

  if (isLoading) {
    return (
      <nav style={styles.nav}>
        <ul style={styles.ul}>
          <li>Loading...</li>
        </ul>
      </nav>
    );
  }

  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li>
          <NavLink to="/" style={({ isActive }) => styles.navLink(isActive)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/all-products"
            style={({ isActive }) => styles.navLink(isActive)}
          >
            All Products
          </NavLink>
        </li>
        {products.map((category) => (
          <li key={category.id}>
            <NavLink
              to={`/category/${category.id}`}
              style={({ isActive }) => styles.navLink(isActive)}
            >
              {category.name}
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink
            to="/cart"
            style={({ isActive }) => styles.navLink(isActive)}
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: "#f8f8f8",
    padding: "1em",
  },
  ul: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    justifyContent: "space-around",
  },
  navLink: (isActive) => ({
    textDecoration: "none",
    color: "#000",
    padding: "0.5em",
    transition: "color 0.3s",
    borderBottom: isActive ? "2px solid #000" : "none",
    paddingBottom: isActive ? "0.2em" : "0",
  }),
};

export default TopNavigation;
