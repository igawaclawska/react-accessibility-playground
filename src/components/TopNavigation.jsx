import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { CartContext } from "../contexts/CartContext";
import NavigationLink from "./NavigationLink";
import ShoppingCartIcon from "./Icons/ShoppingCartIcon";
import NotificationBadge from "./shared/NotificationBadge";
import styles from "./TopNavigation.module.css";

const TopNavigation = () => {
  const { categories, isLoading } = useContext(ProductsContext);
  const { getTotalItems } = useContext(CartContext);
  const totalItems = getTotalItems();

  //TODO: Implement a different method for announcing the loading state
  if (isLoading) {
    return (
      <nav className={styles.nav} aria-live="assertive">
        Loading...
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
        {categories?.map((category) => (
          <NavigationLink key={category.id} to={`/category/${category.id}`}>
            {category.name}
          </NavigationLink>
        ))}
        <NavigationLink to="/cart">
          <ShoppingCartIcon ariaHidden="true" />
          Cart
          {totalItems > 0 && <NotificationBadge count={totalItems} />}
        </NavigationLink>
      </ul>
    </nav>
  );
};

export default TopNavigation;
