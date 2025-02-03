import { useContext, useCallback, useRef } from "react";
import ProductCard from "../components/ProductCard";
import { ProductsContext } from "../contexts/ProductsContext";
import Button from "../components/Button";
import styles from "./LandingPage.module.css";
import ArrowRight from "../components/ArrowRight";

const LandingPage = () => {
  const { products, isLoading } = useContext(ProductsContext);
  const bestsellersRef = useRef(null);

  const handleScrollToBestsellers = () => {
    if (bestsellersRef.current) {
      window.scrollTo({
        top: bestsellersRef.current.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  const renderProducts = useCallback(
    (filterFn, title, ref) => (
      <div className={styles.section} ref={ref}>
        <p className={styles.categoryName}>{title}</p>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {products.flatMap((category) => {
            const { name } = category;
            return category.products
              .filter(filterFn)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  productName={product.name}
                  price={product.price}
                  imgSrc={product.imgSrc}
                  category={name}
                  link={`/category/${category.id}/product/${product.id}`}
                />
              ));
          })}
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
          src="/images/headphones.png"
          alt="Hero"
          className={styles.heroImage}
        />
        <div className={styles.heroText}>
          <h1 className={styles.heroHeading}>Welcome to Our Store</h1>
          <p className={styles.heroSubheading}>
            Discover the most amazing products in our collection.
          </p>
          <Button onClick={handleScrollToBestsellers}>
            Shop Now <ArrowRight />
          </Button>
        </div>
      </div>
      {renderProducts(
        (product) => product.bestseller,
        "Bestsellers",
        bestsellersRef
      )}
      {renderProducts((product) => product.recommended, "Recommended")}
      {renderProducts((product) => product.newArrival, "New Arrivals")}
    </div>
  );
};

export default LandingPage;
