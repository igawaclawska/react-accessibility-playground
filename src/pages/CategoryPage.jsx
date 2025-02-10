import { useContext, useMemo } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { useParams } from "react-router-dom";
import Main from "../components/shared/Main";
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
      <Main>
        <div aria-busy="true">Loading...</div>
      </Main>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <Main>
        <title>Category page</title>
        <h1>No products found.</h1>
      </Main>
    );
  }

  return (
    <Main>
      <title>{categoryName}</title>
      <h1 className={styles.categoryName}>{categoryName}</h1>
      <ul className={styles.productList}>
        {filteredProducts.map((product) => (
          <ProductCard
            {...product}
            key={product.id}
            headingLevel="h2"
            alt={""}
            link={`/category/${product.categoryId}/product/${product.id}`}
          />
        ))}
      </ul>
    </Main>
  );
};

export default CategoryPage;
