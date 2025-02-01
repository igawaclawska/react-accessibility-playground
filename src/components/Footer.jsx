import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContext";

const Footer = () => {
  const { products, isLoading } = useContext(ProductsContext);

  if (isLoading) {
    return <footer style={styles.footer}>Loading...</footer>;
  }

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h4>Contact Us</h4>
          <p>Email: info@webshop.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Webshop St, E-commerce City</p>
        </div>
        <div style={styles.section}>
          <h4>Follow Us</h4>
          <ul style={styles.list}>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div style={styles.section}>
          <h4>Quick Links</h4>
          <ul style={styles.list}>
            <li>
              <NavLink to="/" style={styles.link}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/category/all-products" style={styles.link}>
                All Products
              </NavLink>
            </li>
            {products.map((category) => (
              <li key={category.id}>
                <NavLink to={`/category/${category.id}`} style={styles.link}>
                  {category.name}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/cart" style={styles.link}>
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink to="/checkout" style={styles.link}>
                Checkout
              </NavLink>
            </li>
          </ul>
        </div>
        <div style={styles.section}>
          <h4>Legal</h4>
          <ul style={styles.list}>
            <li>
              <NavLink to="/privacy-policy" style={styles.link}>
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="/terms-of-service" style={styles.link}>
                Terms of Service
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <p>&copy; 2023 Webshop. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "2em 0",
    textAlign: "center",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  section: {
    margin: "1em",
    textAlign: "left", // Align text to the left
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
};

export default Footer;
