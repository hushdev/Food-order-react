import React from 'react';
import styles from './Modal.module.scss';

const Modal = (props) => {
  return (
    <div className={`${styles.modal} ${props.className}`}>
      <div className={styles.modal__content}>{props.children}</div>
    </div>
  )
};

export default Modal;