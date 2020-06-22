import React, { useState, useEffect } from "react";

import uniqueID from "./uniqueID";
//import Modal from "@material-ui/core/Modal";

const Form = props => {
  let startItem = {
    name: "",
    category: "",
    id: uniqueID(),
    purchased: false
  };
  const [item, setItem] = useState(startItem);

  useEffect(() => {
    if (props.itemToEdit !== undefined) {
      setItem(props.itemToEdit);
    }
  }, [props.itemToEdit]);

  const changeHandler = event => {
    setItem({ ...item, [event.target.name]: event.target.value });
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

  return (
    // <div>
    //     <p>Form is here</p>
    <form className="form-input" onSubmit={submitHandler}>
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
      <p />
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
      <p />
      <p />
      <button>Click To Submit</button>
    </form>

    // </div>
  );
};

export default Form;
