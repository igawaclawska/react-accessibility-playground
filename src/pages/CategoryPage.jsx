import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products.json"; // Adjust the path as necessary

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoryId === "all-products") {
      // If categoryId is "all-products", combine all products from all categories
      const allProducts = productsData.categories.flatMap(
        (category) => category.products
      );
      setProducts(allProducts);
    } else {
      // Find the category based on the categoryId from the URL
      const foundCategory = productsData.categories.find(
        (category) => category.id === categoryId
      );
      setProducts(foundCategory ? foundCategory.products : []);
    }
  }, [categoryId]);

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  const styles = {
    categoryName: {
      fontSize: "2em",
      fontWeight: "bold",
      margin: "1em 0",
    },
    section: {
      marginBottom: "2em",
    },
  };

  return (
    <div>
      <p style={styles.categoryName}>
        {categoryId === "all-products"
          ? "All Products"
          : `Category: ${categoryId}`}
      </p>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productName={product.name}
            imgSrc={product.imgSrc}
            link={`/category/${categoryId}/product/${product.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
