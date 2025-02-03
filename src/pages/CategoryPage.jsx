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

    if (categoryId === "all-products") {
      return products;
    }

    return products.filter((product) => product.categoryId === categoryId);
  }, [products, categoryId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (filteredProducts.length === 0) {
    return <div>No products found.</div>;
  }

  const formatCategoryName = (id) => {
    return id.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div>
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
