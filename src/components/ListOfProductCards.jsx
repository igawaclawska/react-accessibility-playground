import styles from "./ListOfProductCards.module.css";
import ProductCard from "./ProductCard";

const ListOfProductCards = ({ products }) => {
  return (
    <ul className={styles.productList}>
      {products.map((product) => (
        <ProductCard
          {...product}
          key={product.id}
          headingLevel={2}
          alt={""}
          link={`/category/${product.categoryId}/product/${product.id}`}
        />
      ))}
    </ul>
  );
};

export default ListOfProductCards;
