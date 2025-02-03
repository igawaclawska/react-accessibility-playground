import { useContext, useCallback, useRef } from "react";
import ProductCard from "../components/ProductCard";
import { ProductsContext } from "../contexts/ProductsContext";
import Button from "../components/Button";
import styles from "./LandingPage.module.css";
import ArrowRight from "../components/ArrowRight";

const LandingPage = () => {
  const { productsByCategory, categories, isLoading } =
    useContext(ProductsContext);
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
