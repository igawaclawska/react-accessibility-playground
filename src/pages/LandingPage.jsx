import { useContext, useCallback } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import useScrollTo from "../hooks/useScrollTo";
import Main from "../components/shared/Main";
import Heading from "../components/shared/Heading";
import ListOfProductCards from "../components/ListOfProductCards";
import Button from "../components/shared/Button";
import Image from "../components/shared/Image";
import ArrowRight from "../components/Icons/ArrowRight";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const { productsByCategory, categories } = useContext(ProductsContext);
  const { elementRef, scrollToElement } = useScrollTo(50);

  const renderCategory = useCallback(
    (filterFn, title, ref) => {
      const filteredProducts = categories.flatMap((category) => {
        const productsInCategory = productsByCategory[category.id] || [];
        return productsInCategory.filter(filterFn);
      });

      if (filteredProducts.length === 0) return null;

      return (
        <section className={styles.section}>
          <Heading ref={ref} level={2} tabIndex="-1">
            {title}
          </Heading>
          <ListOfProductCards products={filteredProducts} />
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
          <Heading className={styles.heroHeading}>Welcome to Our Store</Heading>
          <p className={styles.heroSubheading}>
            Discover the most amazing products in our collection.
          </p>
          <Button onClick={scrollToElement}>
            Shop Now <ArrowRight ariaHidden="true" />
          </Button>
        </div>
      </div>

      {renderCategory((product) => product.bestseller, "Bestsellers")}
      {renderCategory(
        (product) => product.recommended,
        "Recommended",
        elementRef
      )}
      {renderCategory((product) => product.newArrival, "New Arrivals")}
    </Main>
  );
};

export default LandingPage;
