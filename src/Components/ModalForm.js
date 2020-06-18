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
  // {props.inputNewItem({
  //   name: item.name,
  //   category: item.category
  // })}

  const newItemClick = event => {
    event.preventDefault();
  };
  const submitHandler = event => {
    event.preventDefault();
    if (props.isEditing) {
      setItem(props.itemToEdit);
      props.editItem(item);
      alert("Yes we're editing an Item!");
      return;
    }
    props.addMember(item);
    setItem({ name: "", category: "", purchased: false, id: uniqueID() });
  };
  const changeHandler = event => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };
  return (
    <div className={styles.modalContainer}>
      <h1>Input new Item</h1>
      <form className={styles.modalInput} onSubmit={submitHandler}>
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
      <button onClick={newItemClick}>Add Item</button>
      <button onClick={props.toggleModal}>Close</button>
    </div>
  );
}
