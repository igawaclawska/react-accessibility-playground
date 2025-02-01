import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { ProductsContext } from "../contexts/ProductsContext";

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

export default CategoryPage;
