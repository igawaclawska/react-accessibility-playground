import React, { createContext, useState, useEffect } from "react";
import productsData from "../data/products.json";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 10));
        setCategories(productsData.categories);
        setProducts(productsData.products);
      } catch (error) {
        console.error("Failed to fetch products data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ProductsContext.Provider value={{ categories, products, isLoading }}>
      {children}
    </ProductsContext.Provider>
  );
};
