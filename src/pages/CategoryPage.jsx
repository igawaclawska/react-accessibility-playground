import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const CategoryPage = () => {
  const { categoryId } = useParams();
  return (
    <>
      <p style={styles.categoryName}>{categoryId}</p>
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
    </>
  );
};

const styles = {
  categoryName: {
    fontSize: "2em",
    fontWeight: "bold",
    color: "#333",
    margin: "1em 0",
  },
};

export default CategoryPage;
