import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { categoryId } = useParams();
  return <div>Category Page: {categoryId}</div>;
};

export default CategoryPage;
