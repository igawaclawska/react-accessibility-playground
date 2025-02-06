import { useContext, useCallback } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import MainContent from "../components/MainContent";
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
        <section className={styles.section} ref={ref}>
          <h2 className={styles.categoryName}>{title}</h2>
          <div className={styles.list}>
            {filteredProducts.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  {...product}
                  headingLevel="h3"
                  link={`/category/${product.categoryId}/product/${product.id}`}
                />
              );
            })}
          </div>
        </section>
      );
    },
    [categories, productsByCategory]
  );

  if (isLoading) {
    return (
      <MainContent>
        <h2>Loading...</h2>
      </MainContent>
    );
  }

  return (
    <MainContent>
      <title>Home</title>
      <div className={styles.heroSection}>
        <img src="/images/headphones.png" className={styles.heroImage} />
        <div className={styles.heroText}>
          <h2 className={styles.heroHeading}>Welcome to Our Store</h2>
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
    </MainContent>
  );
};

export default LandingPage;
