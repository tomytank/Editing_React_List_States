import React, { useState } from "react";
import ReactDOM from "react-dom";


//import Modal from "@material-ui/core/Modal";
//import SimpleModal from "./Components/ModalInputForm";

//import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import data from "./data";
import "./styles.css";

import InputForm from "./Components/InputForm";
import Settings from "./Components/Settings";
import ItemsList from "./Components/ItemsList";
import PageHeader from "./Components/PageHeader";
import uniqueID from "./Components/uniqueID";

export default function App() {
  //const [listItem, setListItem] = useState();
  const [list, setList] = useState(data);
  console.log("List from App.js", list);

  /****input new item function to be passed as props.****/
  const inputNewItem = newItem => {
    const itemUniqueID = uniqueID();

    //console.log("Current itemUniqueID is ", itemUniqueID);
    // const newItemToAdd = {
    //   name: newItem.name,
    //   category: newItem.category,
    //   id: itemUniqueID,
    //   purchased: false
    // };
    //const [itemToAdd, setItemToAdd] = useState(newItemToAdd);

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

        <PageHeader inputNewItem={inputNewItem()} />
      </div>
      <ItemsList list={list} />
    </div>
  );
}
