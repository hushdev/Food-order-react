import React, { useState } from "react";
import styles from "./MealsForm.module.scss";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

const MealsForm = (props) => {
  const [counter, setCounter] = useState(1);

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      name: props.name,
      description: props.description,
      price: props.price * counter,
      amount: counter,
    };

    console.log(data);
    alert('Done!');
  };

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter < 2) return;
    setCounter(counter - 1);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Button type="button" onClick={decrement} className={styles.decrement}>
        —
      </Button>
      <Input id="mealsCounter" value={counter} readOnly={true} type="text" />
      <Button type="button" onClick={increment} className={styles.increment}>
        +
      </Button>
      <Button type="submit" className={styles.formBtn}>
        Add
      </Button>
    </form>
  );
};

export default MealsForm;
