import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const { categoryId, productId } = useParams();
  return (
    <div className="product-page">
      <header className="product-header">
        <h1>Product: {productId}</h1>
        <p>Category: {categoryId}</p>
        <p>
          Displaying details for product {productId} in category {categoryId}.
        </p>
        <Link to={`/category/${categoryId}`}>Back to Category</Link>
      </header>
      {/* Add logic to display product details based on the categoryId and productId */}
    </div>
  );
};

export default ProductPage;
