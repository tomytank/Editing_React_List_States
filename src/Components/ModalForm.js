import React from "react";

import styles from "./modal.module.css";

export default function Modal(props) {
  return (
    <div className={styles.modalContainer}>
      <h1>Modal Open</h1>
      <button onClick={props.toggleModal}>Close Modal</button>
    </div>
  );
}
