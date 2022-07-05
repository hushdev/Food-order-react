import React from "react";
import styles from "./Input.module.scss";

const Input = (props) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} id={props.id} value={props.value} readOnly={props.readOnly}/>
    </div>
  );
};

export default Input;
