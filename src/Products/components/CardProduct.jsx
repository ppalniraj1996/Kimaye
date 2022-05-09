import React from "react";

import styles from "./mystyle.module.css";

const CardProduct = ({ item, handleClick }) => {
  const { name, price, img } = item;
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.image}>
          <img className={styles.img} src={img} alt="" />
        </div>
        <div className={styles.details}>
          <h3 className={styles.h3}>{name}</h3>
          <p className={styles.col}>₹{price}</p>
          <button className={styles.button} onClick={() => handleClick(item)}>
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
