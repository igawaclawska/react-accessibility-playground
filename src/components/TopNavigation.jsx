import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { CartContext } from "../contexts/CartContext";
import NavigationLink from "./NavigationLink";
import ShoppingCartIcon from "./Icons/ShoppingCartIcon";
import NotificationBadge from "./NotificationBadge";
import styles from "./TopNavigation.module.css";

const TopNavigation = () => {
  const { categories, isLoading } = useContext(ProductsContext);
  const { getTotalItems } = useContext(CartContext);
  const totalItems = getTotalItems();

  if (isLoading) {
    return (
      <div className={styles.nav}>
        <div className={styles.ul}>
          <li>Loading...</li>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.nav}>
      <div className={styles.ul}>
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
      </div>
    </div>
  );
};

export default TopNavigation;
