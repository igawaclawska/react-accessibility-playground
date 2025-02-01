import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { ProductsContext } from "../contexts/ProductsContext";
import styles from "./CategoryPage.module.css";

const CategoryPage = () => {
  const { products, isLoading } = useContext(ProductsContext);
  const { categoryId } = useParams();

  const filteredProducts = useMemo(() => {
    console.log("Filter Memo called");
    return categoryId === "all-products"
      ? products.flatMap((category) => category.products)
      : products.find((category) => category.id === categoryId)?.products || [];
  }, [products, categoryId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (filteredProducts.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div>
      <p className={styles.categoryName}>
        {categoryId === "all-products"
          ? "All Products"
          : `Category: ${categoryId}`}
      </p>
      <div className={styles.productList}>
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
