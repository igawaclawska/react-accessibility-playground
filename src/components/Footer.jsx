import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContext";
import styles from "./Footer.module.css";

const Footer = () => {
  const { categories, isLoading } = useContext(ProductsContext);

  if (isLoading) {
    return <footer className={styles.footer}>Loading...</footer>;
  }

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h4>Contact Us</h4>
          <p>Email: info@webshop.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Webshop St, E-commerce City</p>
        </div>
        <div className={styles.section}>
          <h4>Follow Us</h4>
          <ul className={styles.list}>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4>Quick Links</h4>
          <ul className={styles.list}>
            <li>
              <NavLink to="/" className={styles.link}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/category/all-products" className={styles.link}>
                All Products
              </NavLink>
            </li>
            {categories.map((category) => (
              <li key={category.id}>
                <NavLink
                  to={`/category/${category.id}`}
                  className={styles.link}
                >
                  {category.name}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/cart" className={styles.link}>
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink to="/checkout" className={styles.link}>
                Checkout
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4>Legal</h4>
          <ul className={styles.list}>
            <li>
              <NavLink to="/privacy-policy" className={styles.link}>
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="/terms-of-service" className={styles.link}>
                Terms of Service
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <p>&copy; 2023 Webshop. All rights reserved.</p>
    </div>
  );
};

export default Footer;
