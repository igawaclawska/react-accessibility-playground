import { useContext, useCallback } from "react";
import ProductCard from "../components/ProductCard";
import { ProductsContext } from "../contexts/ProductsContext";
import Button from "../components/Button";

const LandingPage = () => {
  const { products, isLoading } = useContext(ProductsContext);

  const renderProducts = useCallback(
    (filterFn, title) => (
      <div style={styles.section}>
        <p style={styles.categoryName}>{title}</p>
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
      <div style={styles.heroSection}>
        <img
          src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero"
          style={styles.heroImage}
        />
        <div style={styles.heroText}>
          <h1 style={styles.heroHeading}>Welcome to Our Store</h1>
          <p style={styles.heroSubheading}>
            Discover the most amazing products in our collection.
          </p>
          <Button>Shop Now</Button>
        </div>
      </div>
      {renderProducts((product) => product.bestseller, "Bestsellers")}
      {renderProducts((product) => product.recommended, "Recommended")}
      {renderProducts((product) => product.newArrival, "New Arrivals")}
    </div>
  );
};

const styles = {
  heroSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2em",
    backgroundColor: "#f5f5f5",
    marginBottom: "2em",
  },
  heroImage: {
    width: "50%",
    height: "auto",
    marginRight: "2em",
  },
  heroText: {
    maxWidth: "50%",
    textAlign: "left",
  },
  heroHeading: {
    fontSize: "2.5em",
    marginBottom: "0.5em",
  },
  heroSubheading: {
    fontSize: "1.5em",
    color: "#666",
  },
  categoryName: {
    fontSize: "2em",
    fontWeight: "bold",
    margin: "1em 0",
  },
  section: {
    marginBottom: "2em",
  },
};

export default LandingPage;
