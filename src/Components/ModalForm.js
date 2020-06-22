import React, { useState } from "react";

import uniqueID from "./uniqueID";
import styles from "./modal.module.css";

export default function Modal(props) {
  console.log("Props from ModalForm", props);
  let startItem = {
    name: "",
    category: "",
    id: uniqueID(),
    purchased: false
  };
  const [item, setItem] = useState(startItem);

  const submitHandler = event => {
    event.preventDefault();
    console.log("Submit Handlier clicked");
    startItem.name = item.name;
    startItem.category = item.category;
    props.inputNewItem(startItem);
    setItem({ name: "", category: "", purchased: false, id: uniqueID() });
  };
  //props.addMember(item);
  //setItem({ name: "", category: "", purchased: false, id: uniqueID() });
  //};

  const changeHandler = event => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };
  return (
    <div className={styles.modalContainer}>
      <h1>Input new Item</h1>
      <form className={styles.modalInput}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            name="name"
            label="name"
            type="text"
            placeholder="Enter Name"
            value={item.name}
            onChange={changeHandler}
          />
        </div>

        <p />
        <div>
          <label htmlFor="category">Category: </label>
          <input
            id="category"
            name="category"
            label="category"
            type="text"
            placeholder="Enter category"
            value={item.category}
            onChange={changeHandler}
          />
        </div>
      </form>
      <p />
      <button onClick={submitHandler}>Add Item</button>
      <button onClick={props.toggleModal}>Close</button>
    </div>
  );
}
//<button onClick={newItemClick}>Add Item</button>
