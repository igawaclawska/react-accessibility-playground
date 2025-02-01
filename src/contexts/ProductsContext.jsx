import React, { createContext, useState, useEffect } from "react";
import productsData from "../data/products.json";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setProducts(productsData.categories);
    setIsLoading(false);
    console.log("ProductsProvider: Products loaded");
  }, []);

  return (
    <ProductsContext.Provider value={{ products, isLoading }}>
      {children}
    </ProductsContext.Provider>
  );
};
