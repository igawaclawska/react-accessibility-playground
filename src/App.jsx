import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import TopNavigation from "./components/TopNavigation";
import AppRoutes from "./AppRoutes";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <ProductsProvider>
      <CartProvider>
        <Router>
          <TopNavigation />
          <AppRoutes />
          <Footer />
        </Router>
      </CartProvider>
    </ProductsProvider>
  );
};

export default App;
