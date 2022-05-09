import React from "react";
import CardProduct from "./CardProduct";
import product from "./data";
import styles from "./mystyle.module.css";

const Products = ({ handleClick }) => {
  return (
    <section>
      {product.map((item) => (
        <CardProduct key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Products;
