import React from "react";
import styles from "./Header.module.scss";
import background from "../../HeaderBG.jpg";
import CartBtn from "../UI/CartBtn";

const Header = () => {
  const cartBtnClickHandler = () => {
    alert('asd')
  }
  
  return (
    <>
      <header className={styles.header}>
        <h2>Food Order</h2>

        <CartBtn onClick={cartBtnClickHandler}/>
      </header>
      <div className={styles.image}>
        <img src={background} alt="bg pic" />
      </div>
    </>
  );
};

export default Header;
