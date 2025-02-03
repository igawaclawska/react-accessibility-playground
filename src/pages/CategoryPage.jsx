import { useContext, useMemo } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import styles from "./CategoryPage.module.css";

const CategoryPage = () => {
  const { productsByCategory, isLoading } = useContext(ProductsContext);
  const { categoryId } = useParams();

  const filteredProducts = useMemo(() => {
    if (categoryId === "all-products") {
      return Object.values(productsByCategory).flat();
    }

    return productsByCategory[categoryId] || [];
  }, [productsByCategory, categoryId]);

  if (isLoading) {
    return <div className={styles.pageContainer}>Loading...</div>;
  }

  if (filteredProducts.length === 0) {
    return <div className={styles.pageContainer}>No products found.</div>;
  }

  const formatCategoryName = (id) => {
    return id.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className={styles.pageContainer}>
      <p className={styles.categoryName}>{formatCategoryName(categoryId)}</p>
      <div className={styles.productList}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            productName={product.name}
            price={product.price}
            imgSrc={product.imgSrc}
            category={formatCategoryName(product.categoryId)}
            link={`/category/${product.categoryId}/product/${product.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
