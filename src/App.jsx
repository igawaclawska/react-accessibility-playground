import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import "./App.css";

const App = () => {
  return (
    <Router>
      <nav style={{ backgroundColor: "#f8f8f8", padding: "1em" }}>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <li>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#000",
                padding: "0.5em",
                transition: "color 0.3s",
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/category/category-1"
              style={{
                textDecoration: "none",
                color: "#000",
                padding: "0.5em",
                transition: "color 0.3s",
              }}
            >
              Category 1
            </Link>
          </li>
          <li>
            <Link
              to="/category/category-2"
              style={{
                textDecoration: "none",
                color: "#000",
                padding: "0.5em",
                transition: "color 0.3s",
              }}
            >
              Category 2
            </Link>
          </li>
          <li>
            <Link
              to="/category/category-3"
              style={{
                textDecoration: "none",
                color: "#000",
                padding: "0.5em",
                transition: "color 0.3s",
              }}
            >
              Category 3
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              style={{
                textDecoration: "none",
                color: "#000",
                padding: "0.5em",
                transition: "color 0.3s",
              }}
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              to="/checkout"
              style={{
                textDecoration: "none",
                color: "#000",
                padding: "0.5em",
                transition: "color 0.3s",
              }}
            >
              Checkout
            </Link>
          </li>
        </ul>
      </nav>
      <div style={{ minHeight: "calc(100vh - 200px)" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route
            path="/category/:categoryId/product/:productId"
            element={<ProductPage />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      <footer
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "2em 0",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div style={{ margin: "1em" }}>
            <h4>Contact Us</h4>
            <p>Email: info@webshop.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Webshop St, E-commerce City</p>
          </div>
          <div style={{ margin: "1em" }}>
            <h4>Follow Us</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div style={{ margin: "1em" }}>
            <h4>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/category/category-1"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Category 1
                </Link>
              </li>
              <li>
                <Link
                  to="/category/category-2"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Category 2
                </Link>
              </li>
              <li>
                <Link
                  to="/category/category-3"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Category 3
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/checkout"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Checkout
                </Link>
              </li>
            </ul>
          </div>
          <div style={{ margin: "1em" }}>
            <h4>Legal</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <Link
                  to="/privacy-policy"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p>&copy; 2023 Webshop. All rights reserved.</p>
      </footer>
    </Router>
  );
};

export default App;
