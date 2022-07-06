import React, {useState} from "react";
import styles from "./Header.module.scss";
import background from "../../../HeaderBG.jpg";
import CartBtn from "../../Cart/CartBtn/CartBtn";
import Cart from "../../Cart/Cart";

const Header = () => {
  const [cartActive, setCartActive] = useState(false);

  const toggleCartHandler = () => {
    setCartActive(!cartActive);
  }
  
  return (
    <>
      {cartActive && <Cart onClose={toggleCartHandler}/>}
      <header className={styles.header}>
        <h2>Food Order</h2>
        <CartBtn onClick={toggleCartHandler}/>
      </header>
      <div className={styles.image}>
        <img src={background} alt="bg pic" />
      </div>
    </>
  );
};

export default Header;
