import { useContext, useMemo } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { useParams } from "react-router-dom";
import Main from "../components/shared/Main";
import Heading from "../components/shared/Heading";
import ListOfProductCards from "../components/ListOfProductCards";

const CategoryPage = () => {
  const { productsByCategory, isLoading, categories } =
    useContext(ProductsContext);
  const { categoryId } = useParams();

  const categoryName = useMemo(() => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "All Products";
  }, [categoryId, categories]);

  const filteredProducts = useMemo(() => {
    if (categoryId === "all-products") {
      return Object.values(productsByCategory).flat();
    }
    return productsByCategory[categoryId] || [];
  }, [productsByCategory, categoryId]);

  //TODO: Implement a different method for announcing the loading state
  if (isLoading) {
    return (
      <Main>
        <div aria-busy="true">Loading...</div>
      </Main>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <Main>
        <title>Category page</title>
        <h1>No products found.</h1>
      </Main>
    );
  }

  return (
    <Main>
      <title>{categoryName}</title>
      <Heading>{categoryName}</Heading>
      <ListOfProductCards products={filteredProducts} />
    </Main>
  );
};

export default CategoryPage;
