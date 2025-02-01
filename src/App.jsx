import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import "./App.css";
import { CartProvider } from "./contexts/CartContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import TopNavigation from "./components/TopNavigation";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ProductsProvider>
      <CartProvider>
        <Router>
          <TopNavigation />
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
          <Footer />
        </Router>
      </CartProvider>
    </ProductsProvider>
  );
};

export default App;
