import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      Landing Page
      <Link to="/category/electronics/product/123">Product</Link>
    </div>
  );
};

export default LandingPage;
