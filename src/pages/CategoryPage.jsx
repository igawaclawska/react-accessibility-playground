import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { ProductsContext } from "../contexts/ProductsContext";

const CategoryPage = () => {
  const { products, isLoading } = useContext(ProductsContext);
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (categoryId === "all-products") {
      const allProducts = products.flatMap((category) => category.products);
      setFilteredProducts(allProducts);
    } else {
      const foundCategory = products.find(
        (category) => category.id === categoryId
      );
      setFilteredProducts(foundCategory ? foundCategory.products : []);
    }
  }, [categoryId, products]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (filteredProducts.length === 0) {
    return <div>No products found.</div>;
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
        {filteredProducts.map((product) => (
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
