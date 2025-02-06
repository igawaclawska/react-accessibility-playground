import { useContext, useMemo } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { useParams } from "react-router-dom";
import MainContent from "../components/MainContent";
import ProductCard from "../components/ProductCard";
import styles from "./CategoryPage.module.css";

const CategoryPage = () => {
  const { productsByCategory, isLoading, categories } =
    useContext(ProductsContext);
  const { categoryId } = useParams();

  const categoryName = useMemo(() => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "All Products";
  }, [categoryId, categories]);

  const filteredProducts = useMemo(() => {
    if (categoryId === "all-products") {
      return Object.values(productsByCategory).flat();
    }

    return productsByCategory[categoryId] || [];
  }, [productsByCategory, categoryId]);

  if (isLoading) {
    return (
      <MainContent>
        <h2>Loading...</h2>
      </MainContent>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <MainContent>
        <title>Product page</title>
        <h2>No products found.</h2>
      </MainContent>
    );
  }

  return (
    <MainContent>
      <title>{categoryName}</title>
      <h2 className={styles.categoryName}>{categoryName}</h2>
      <div className={styles.productList}>
        {filteredProducts.map((product) => (
          <ProductCard
            {...product}
            key={product.id}
            headingLevel="h2"
            link={`/category/${product.categoryId}/product/${product.id}`}
          />
        ))}
      </div>
    </MainContent>
  );
};

export default CategoryPage;
