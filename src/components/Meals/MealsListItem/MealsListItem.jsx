import React from "react";
import styles from "./MealsListItem.module.scss";
import MealsForm from "../MealsForm/MealsForm";

const MealsListItem = ({ name, price, description }) => {
  return (
    <li className={styles.item}>
      <div className={styles.left}>
        <div className={styles.name}>{name}</div>
        <div className={styles.desc}>{description}</div>
        <div className={styles.price}>${price}</div>
      </div>
      <MealsForm name={name} description={description} price={price}/>
    </li>
  );
};

export default MealsListItem;
