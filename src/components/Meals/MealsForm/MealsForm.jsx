import React, { useState } from "react";
import styles from "./MealsForm.module.scss";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

const MealsForm = (props) => {
  const [counter, setCounter] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const cancelHandler = () => {
    setSubmitted(false);
    // TODO - remove from cart logic
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      name: props.name,
      description: props.description,
      price: props.price * counter,
      amount: counter,
      id: props.id
    };

    console.log(data);
    setSubmitted(true);
  };

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter < 2) return;
    setCounter(counter - 1);
  };

  return (
    <>
      {!submitted ? (
        <form onSubmit={submitHandler} className={styles.form}>
          {/* Decrement button */}
          <Button
            type="button"
            onClick={decrement}
            className={styles.decrement}
          >
            —
          </Button>
          {/* Value input */}
          <Input
            id="mealsCounter"
            value={counter}
            readOnly={true}
            type="text"
          />
          {/* Increment button */}
          <Button
            type="button"
            onClick={increment}
            className={styles.increment}
          >
            +
          </Button>
          {/* Submit button */}
          <Button type="submit" className={styles.formBtn}>
            Add to cart
          </Button>
        </form>
      ) : (
        // Remove from cart button
        <Button onClick={cancelHandler} type="button" className={styles.cancelBtn}>Remove from cart</Button>
      )}
    </>
  );
};

export default MealsForm;
