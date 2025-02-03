import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { CartContext } from "../contexts/CartContext";
import styles from "./TopNavigation.module.css";
import NavigationLink from "./NavigationLink";
import ShoppingCartIcon from "./ShoppingCartIcon";
import NotificationBadge from "./NotificationBadge";

const TopNavigation = () => {
  const { categories, isLoading } = useContext(ProductsContext);
  const { getTotalItems } = useContext(CartContext);
  const totalItems = getTotalItems();

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
        {categories.map((category) => (
          <NavigationLink key={category.id} to={`/category/${category.id}`}>
            {category.name}
          </NavigationLink>
        ))}
        <NavigationLink to="/cart">
          <ShoppingCartIcon />
          Cart
          {totalItems > 0 && <NotificationBadge count={totalItems} />}
        </NavigationLink>
      </ul>
    </nav>
  );
};

export default TopNavigation;
