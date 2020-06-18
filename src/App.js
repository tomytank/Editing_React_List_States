import React, { useState } from "react";
import ReactDOM from "react-dom";

import Modal from "@material-ui/core/Modal";
import SimpleModal from "./Components/ModalInputForm";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import data from "./data";
import "./styles.css";

import InputForm from "./Components/InputForm";
import Settings from "./Components/Settings";
import ItemsList from "./Components/ItemsList";
import PageHeader from "./Components/PageHeader";
import uniqueID from "./Components/uniqueID";

export default function App() {
  const [listItem, setListItem] = useState();
  const [list, setList] = useState(data);
  console.log(list);
  const inputNewItem = () => {
    const itemUniqueID = uniqueID();
    console.log("Current itemUniqueID is ", itemUniqueID);
    const newItemToAdd = {
      name: "",
      category: "",
      id: itemUniqueID,
      purchased: false
    };
    const [itemToAdd, setItemToAdd] = useState(newItemToAdd);
    return (
      <div>
        <SimpleModal itemToAdd={itemToAdd} setItemToAdd={setItemToAdd} />
      </div>
      // <Modal
      //   open={open}
      //   onClose={handleClose}
      //   aria-labelledby="simple-modal-title"
      //   aria-describedby="simple-modal-description"
      // >
      //   <button type="button" onClick="handleNewItem">
      //     Add Item
      //   </button>
      // </Modal>
    );
  };

  toggleItem = itemID => {};

  clearItem = itemID => {};

  editItem = itemID => {};

  addItem = itemID => {};

  return (
    <div className="App">
      <p />
      <div>
        {" "}
        {/* <InputForm className="" /> */}
        <PageHeader inputNewItem={inputNewItem()} />
      </div>
      <ItemsList list={list} />

      {/* <h1>Hello CodeSandbox</h1>

      <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
