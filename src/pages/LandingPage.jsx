import { useContext, useCallback } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import useScrollTo from "../hooks/useScrollTo";
import Main from "../components/shared/Main";
import ProductCard from "../components/ProductCard";
import Button from "../components/shared/Button";
import Image from "../components/shared/Image";
import ArrowRight from "../components/Icons/ArrowRight";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const { productsByCategory, categories } = useContext(ProductsContext);
  const { elementRef, scrollToElement } = useScrollTo(50);

  const renderProducts = useCallback(
    (filterFn, title, ref) => {
      const filteredProducts = categories.flatMap((category) => {
        const productsInCategory = productsByCategory[category.id] || [];
        return productsInCategory.filter(filterFn);
      });

      if (filteredProducts.length === 0) return null;

      return (
        <section className={styles.section}>
          <h2 ref={ref} tabIndex="-1" className={styles.categoryName}>
            {title}
          </h2>
          <ul className={styles.list}>
            {filteredProducts.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  {...product}
                  headingLevel="h3"
                  alt={""}
                  link={`/category/${product.categoryId}/product/${product.id}`}
                />
              );
            })}
          </ul>
        </section>
      );
    },
    [categories, productsByCategory]
  );

  return (
    <Main>
      <title>Home</title>
      <div className={styles.heroSection}>
        <div className={styles.heroImageContainer}>
          <Image src={"/images/headphones.png"} alt={""} size="fit-parent" />
        </div>
        <div className={styles.heroText}>
          <h1 className={styles.heroHeading}>Welcome to Our Store</h1>
          <p className={styles.heroSubheading}>
            Discover the most amazing products in our collection.
          </p>
          <Button onClick={scrollToElement}>
            Shop Now <ArrowRight ariaHidden="true" />
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
    </Main>
  );
};

export default LandingPage;
