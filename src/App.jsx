import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import Header from "./components/shared/Header";
import TopNavigation from "./components/TopNavigation";
import AppRoutes from "./AppRoutes";
import Footer from "./components/shared/Footer";
import "./App.css";

const App = () => {
  return (
    <ProductsProvider>
      <CartProvider>
        <Router>
          <Header>
            <TopNavigation />
          </Header>
          <AppRoutes />
          <Footer>
            <p>&copy; 2025 Webshop. All rights reserved.</p>
          </Footer>
        </Router>
      </CartProvider>
    </ProductsProvider>
  );
};

export default App;
