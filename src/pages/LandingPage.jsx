import { useContext, useCallback } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import useScrollTo from "../hooks/useScrollTo";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import ArrowRight from "../components/Icons/ArrowRight";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const { productsByCategory, categories, isLoading } =
    useContext(ProductsContext);

  const { elementRef, scrollToElement } = useScrollTo(50);

  const renderProducts = useCallback(
    (filterFn, title, ref) => {
      const filteredProducts = categories.flatMap((category) => {
        const productsInCategory = productsByCategory[category.id] || [];
        return productsInCategory.filter(filterFn);
      });

      if (filteredProducts.length === 0) return null;

      return (
        <div className={styles.section} ref={ref}>
          <p className={styles.categoryName}>{title}</p>
          <div
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            {filteredProducts.map((product) => {
              const category = categories.find(
                (cat) => cat.id === product.categoryId
              );
              return (
                <ProductCard
                  key={product.id}
                  productName={product.name}
                  price={product.price}
                  imgSrc={product.imgSrc}
                  category={category?.name || "Unknown"}
                  link={`/category/${product.categoryId}/product/${product.id}`}
                />
              );
            })}
          </div>
        </div>
      );
    },
    [categories, productsByCategory]
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={styles.heroSection}>
        <img
          src="/images/headphones.png"
          alt="Hero"
          className={styles.heroImage}
        />
        <div className={styles.heroText}>
          <h1 className={styles.heroHeading}>Welcome to Our Store</h1>
          <p className={styles.heroSubheading}>
            Discover the most amazing products in our collection.
          </p>
          <Button onClick={scrollToElement}>
            Shop Now <ArrowRight />
          </Button>
        </div>
      </div>

      {renderProducts(
        (product) => product.bestseller,
        "Bestsellers",
        elementRef
      )}
      {renderProducts((product) => product.recommended, "Recommended")}
      {renderProducts((product) => product.newArrival, "New Arrivals")}
    </div>
  );
};

export default LandingPage;
