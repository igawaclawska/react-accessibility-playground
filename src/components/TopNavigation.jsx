import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import styles from "./TopNavigation.module.css";
import NavigationLink from "./NavigationLink";
import ShoppingCartIcon from "./ShoppingCartIcon";

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
        <NavigationLink to="/"> Home</NavigationLink>
        <NavigationLink to="/category/all-products">
          All Products
        </NavigationLink>
        {products.map((category) => (
          <NavigationLink key={category.id} to={`/category/${category.id}`}>
            {category.name}
          </NavigationLink>
        ))}
        <NavigationLink to="/cart">
          <ShoppingCartIcon />
          Cart
        </NavigationLink>
      </ul>
    </nav>
  );
};

export default TopNavigation;
