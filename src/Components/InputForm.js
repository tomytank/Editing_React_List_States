import React, { useState, useEffect } from "react";

//import Modal from "@material-ui/core/Modal";

const Form = props => {
  // console.log("props, memberToEdit form.js->",props.memberToEdit);
  let startItem = {
    name: "",
    category: "",
    id: uniqueID(),
    purchased: false
  };

  // if(props.memberToEdit !== undefined){
  //     startMember = props.membeToEdit;
  // };
  function uniqueID() {
    return (
      "_" +
      (
        Number(String(Math.random()).slice(2)) +
        Date.now() +
        Math.round(Date.now())
      ).toString(36)
    );
  }
  const [item, setItem] = useState(startItem);

  useEffect(() => {
    // const memberObj = storedTeam.find(element => element.id === Number(props.memberToEdic));
    // console.log("Form.js memberToEdit->",props.memberToEdit);
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
      {/* <label htmlFor="role">Role: </label>
      <input
        id="role"
        name="role"
        label="role"
        type="text"
        placeholder="Enter Role"
        value={teamMember.role}
        onChange={changeHandler}
      /> */}
      <p />
      <button>Click To Submit</button>
    </form>

    // </div>
  );
};

export default Form;
