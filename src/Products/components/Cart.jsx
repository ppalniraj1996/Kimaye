import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./mystyle.module.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div className={styles.boss}>
      <div className={styles.bigbox}>
        <div className={styles.dabba}>
          <h1 className={styles.bigblue}>CART</h1>
          <p className={styles.p}>
            <img
              src="https://img.icons8.com/material-outlined/344/home--v2.png"
              height="21px"
              width="22px"
              alt="home"
            />
            &nbsp;Home &nbsp; / &nbsp;Cart
          </p>
        </div>
      </div>
      <table className={styles.dev}>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th className={styles.dev2}>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
      </table>
      <article>
        {cart.map((item) => (
          <div className={styles.cart_box} key={item.id}>
            <div>
              <button
                className={styles.remove}
                onClick={() => handleRemove(item.id)}
              >
                ×
              </button>
            </div>
            <div className={styles.cart_img}>
              <img src={item.img} alt="" />
              <p>{item.name}</p>
            </div>
            <div>
              <span> ₹ {item.price}</span>
            </div>
            <div>
              <button
                className={styles.plus}
                onClick={() => handleChange(item, -1)}
              >
                -
              </button>
              <button className={styles.show}>{item.amount}</button>
              <button
                className={styles.plus}
                onClick={() => handleChange(item, 1)}
              >
                +
              </button>
            </div>
            <div>
              <span className={styles.total}>₹ {price}</span>
            </div>
          </div>
        ))}
      </article>
      <div className={styles.box2}>
        <label className={styles.label}>Pick a Delivery date:</label>
        <input
          onChange="date_changed()"
          name="somedate"
          className={styles.input}
          type="date"
        />
        <label className={styles.label}>Choose a time:</label>
        <select className={styles.select}>
          <option className={styles.option} value="04:00PM-06:00PM">
            04:00PM-06:00PM
          </option>
          <option className={styles.option} value="06:00PM-08:00PM">
            06:00PM-08:00PM
          </option>
        </select>
      </div>
      <p className={styles.para}>Your current delivery location is Mumbai</p>
      <div className={styles.proceed}>
        <div>
          <h2 className={styles.heading}>Special Instructions</h2>
          <textarea
            name="note"
            className={styles.text}
            colspan="6"
            spellcheck="false"
          ></textarea>
        </div>
        <div className={styles.checkout}>
          <h2 className={styles.uppercase}> Cart Totals</h2>
          <div className={styles.showtotal}>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <th className={styles.des}>Subtotal:</th>
                  <td className={styles.border}>
                    <span className={styles.side}> ₹ {price}</span>
                  </td>
                </tr>
                <tr className={styles.total}>
                  <th>TOTAL</th>
                  <td>
                    <strong>
                      <span className={styles.side}>₹ {price}</span>
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className={styles.btn}>
            {/* <Link to="/ProceedToCheckOut">PROCEED TO CHECKOUT</Link> */}
            <a href="./CheckOut.html"> PROCEED TO CHECKOUT</a>
          </button>
          <button className={styles.btn}>CONTINUE SHOPPING</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
