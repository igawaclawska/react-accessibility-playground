import { useContext, useCallback } from "react";
import ProductCard from "../components/ProductCard";
import { ProductsContext } from "../contexts/ProductsContext";
import Button from "../components/Button";
import styles from "./LandingPage.module.css";
import ArrowRight from "../components/ArrowRight";

const LandingPage = () => {
  const { products, isLoading } = useContext(ProductsContext);

  const renderProducts = useCallback(
    (filterFn, title) => (
      <div className={styles.section}>
        <p className={styles.categoryName}>{title}</p>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {products.flatMap((category) =>
            category.products
              .filter(filterFn)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  productName={product.name}
                  price={product.price}
                  imgSrc={product.imgSrc}
                  link={`/category/${category.id}/product/${product.id}`}
                />
              ))
          )}
        </div>
      </div>
    ),
    [products]
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={styles.heroSection}>
        <img
          src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero"
          className={styles.heroImage}
        />
        <div className={styles.heroText}>
          <h1 className={styles.heroHeading}>Welcome to Our Store</h1>
          <p className={styles.heroSubheading}>
            Discover the most amazing products in our collection.
          </p>
          <Button>
            Shop Now <ArrowRight />
          </Button>
        </div>
      </div>
      {renderProducts((product) => product.bestseller, "Bestsellers")}
      {renderProducts((product) => product.recommended, "Recommended")}
      {renderProducts((product) => product.newArrival, "New Arrivals")}
    </div>
  );
};

export default LandingPage;
