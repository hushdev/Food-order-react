import React from "react";
import styles from "./Cart.module.scss";
import Modal from "../UI/Modal/Modal";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const mock = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m6",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const Cart = (props) => {
  const orderHandler = () => {
    // some logic todo
    props.onClose();
  }

  let list = mock.map((meal) => (
    <li key={meal.id}>
      <span>
        {meal.name}, 2x
      </span>
      <span>${meal.price}</span>
    </li>
  ));

  return (
    <Modal>
      <Card className={styles.cart}>
        <ul>{list}</ul>
        <div className={styles.cart__info}>
          <h2>Total Price</h2>
          <h3>$12.1</h3>
        </div>
        <div className={styles.cart__btns}>
          <Button onClick={props.onClose} className={styles.cancel_btn}>Close</Button>
          <Button onClick={orderHandler} className={styles.order_btn}>Order</Button>
        </div>
      </Card>
    </Modal>
  );
};

export default Cart;
