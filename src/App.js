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
  //            const sortOrder = "natural";
  const [sortOrder, setSortOrder] = useState("natural");
  //const [listItem, setListItem] = useState();
  const [list, setList] = useState(data);
  let newList = [];
  console.log("List from App.js", list);

  const settingSortOrder = setNewSortOrder => {
    console.log("From App.js new sortorder will be ", setNewSortOrder);
    setSortOrder(setNewSortOrder);
  };

  /****input new item function to be passed as props.****/
  const inputNewItem = newItem => {
    console.log("new item from App.js added", newItem);
    if (newItem !== undefined) {
      setList([...list, newItem]);
    }
  };
  toggleItem = itemID => {
    console.log("Toggle Item clicked from App.js", itemID);
    console.log(list);
    newList = list.map(item => {
      if (itemID === item.id) {
        console.log("item.id=", item.id);
        return { ...item, purchased: !item.purchased };
        //console.log("after setting purchased", list);
      }
      return item;
    });
    setList(newList);
  };
  /***Removes individual item from list*****/
  clearItem = itemID => {
    //console.log("List from clearitem", list);
    //console.log("ClearItem was clicked->App.js", itemID);
    newList = list.filter(item => {
      if (itemID !== item.id) {
        console.log("Item ", itemID, " removed!");
        return { ...newList, item };
      }
    });
    //console.log("newList is: ", newList);
    setList(newList);
  };
  editItem = itemID => {
    console.log("EditItem was clicked->App.js", itemID);
  };

  return (
    <div className="App">
      <p />
      <div>
        {" "}
        <PageHeader inputNewItem={inputNewItem} />
      </div>
      <ItemsList
        list={list}
        setList={setList}
        toggleItem={toggleItem}
        editItem={editItem}
        clearItem={clearItem}
        /***Sending sort order state to ItemsList */
        settingSortOrder={settingSortOrder}
        sortOrder={sortOrder}
      />
    </div>
  );
}
