import React, { createContext, useState, useEffect } from "react";
import productsData from "../data/products.json";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 10));
        setCategories(productsData.categories);

        const groupedProducts = productsData.products.reduce((acc, product) => {
          if (!acc[product.categoryId]) {
            acc[product.categoryId] = [];
          }
          acc[product.categoryId].push(product);
          return acc;
        }, {});
        setProductsByCategory(groupedProducts);
      } catch (error) {
        console.error("Failed to fetch products data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ categories, productsByCategory, isLoading }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
