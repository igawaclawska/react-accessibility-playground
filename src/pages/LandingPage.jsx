import ProductCard from "../components/ProductCard";

const LandingPage = () => {
  return (
    <div>
      <img
        style={{ maxHeight: "24rem", width: "100%", objectFit: "cover" }}
        src="https://images.unsplash.com/photo-1738070593158-9e84a49e7e60?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></img>
      <p style={styles.categoryName}>Category 1</p>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard
          productName={"Product 1"}
          imgSrc={
            "https://images.unsplash.com/photo-1738070593158-9e84a49e7e60?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          link={"/category/category-1/product/1"}
        />
        <ProductCard
          productName={"Product 1"}
          imgSrc={
            "https://images.unsplash.com/photo-1738070593158-9e84a49e7e60?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          link={"/category/category-1/product/1"}
        />
        <ProductCard
          productName={"Product 1"}
          imgSrc={
            "https://images.unsplash.com/photo-1738070593158-9e84a49e7e60?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          link={"/category/category-1/product/1"}
        />
      </div>

      <p style={styles.categoryName}>Category 2</p>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard
          productName={"Product 2"}
          imgSrc={
            "https://images.unsplash.com/photo-1738070593158-9e84a49e7e60?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          link={"/category/category-2/product/2"}
        />
        <ProductCard
          productName={"Product 2"}
          imgSrc={
            "https://images.unsplash.com/photo-1738070593158-9e84a49e7e60?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          link={"/category/category-2/product/2"}
        />
        <ProductCard
          productName={"Product 2"}
          imgSrc={
            "https://images.unsplash.com/photo-1738070593158-9e84a49e7e60?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          link={"/category/category-2/product/2"}
        />
      </div>

      <p style={styles.categoryName}>Category 3</p>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard
          productName={"Product 3"}
          imgSrc={
            "https://images.unsplash.com/photo-1738070593158-9e84a49e7e60?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          link={"/category/category-3/product/3"}
        />
        <ProductCard
          productName={"Product 3"}
          imgSrc={
            "https://images.unsplash.com/photo-1738070593158-9e84a49e7e60?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          link={"/category/category-3/product/3"}
        />
        <ProductCard
          productName={"Product 3"}
          imgSrc={
            "https://images.unsplash.com/photo-1738070593158-9e84a49e7e60?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          link={"/category/category-3/product/3"}
        />
      </div>
    </div>

    //
  );
};

const styles = {
  container: {
    padding: "2em",
    textAlign: "left",
  },
  categoryName: {
    fontSize: "2em",
    fontWeight: "bold",
    color: "#333",
    margin: "1em 0",
  },
};

export default LandingPage;
