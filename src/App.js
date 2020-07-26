import React, { useState } from "react";
import ReactDOM from "react-dom";

//import Modal from "@material-ui/core/Modal";
//import SimpleModal from "./Components/ModalInputForm";

//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import data from "./data";
import "./styles.css";

//import InputForm from "./Components/InputForm";
//import Settings from "./Components/Settings";
import ItemsList from "./Components/ItemsList";
import PageHeader from "./Components/PageHeader";
import { useLocalStorage } from "./Hooks/useLocalStorage";
//import uniqueID from "./Components/uniqueID";

export default function App() {
  //            const sortOrder = "natural";
  const [sortOrder, setSortOrder] = useState("date");
  //const [listItem, setListItem] = useState();
  const allData = useLocalStorage("ListStored");
  //console.log("Data is", allData[0]);
  //const data = allData[0];
  const [list, setList] = useState(data);
  //console.log("The current list is ", list);
  const [storedList, setStoredList] = useLocalStorage("ListStored");
  const [isEditing, setIsEditing] = useState(false);
  const [currentItemEdit, setCurrentItemEdit] = useState();

  //setStoredList(list);
  //setList(useLocalStorage("ListStored"));
  let newList = [];
  //console.log("List from App.js", list);

  const settingSortOrder = setNewSortOrder => {
    console.log("From App.js new sortorder will be ", setNewSortOrder);
    setSortOrder(setNewSortOrder);
  };
  /*******added sortList function from ItemList to App.js */
  let sortDirection = 1;
  const sortList = sortProperty => {
    //console.log("Current property value ", property);
    //console.log("Current sortOrder value ", sortOrder);
    //console.log("property = sortOrder", property === sortOrder);
    //let sortDirection = 1;
    //console.log("Sortdirection before negation", sortDirection);
    if (sortProperty === sortOrder) {
      //console.log("property = sortOrder", property === sortOrder);
      sortDirection = -1 * sortDirection;
      //console.log("sortDirection ", sortDirection);
    }
    //sortDirection = -1 * sortDirection;
    settingSortOrder(sortProperty);
    //console.log("sortOrder value changed to ", sortOrder);

    const sortProperty2 =
      sortProperty === "date"
        ? "name"
        : property === "category"
        ? "name"
        : "date";
    //console.log("property2 is ", property2);
    const sortedList = list.sort((a, b) =>
      a[sortProperty] > b[sortProperty]
        ? sortDirection
        : a[sortProperty] === b[sortProperty]
        ? a[sortProperty2] > b[sortProperty2]
          ? sortDirection
          : -1 * sortDirection
        : -1 * sortDirection
    );
    setList(sortedList);
    setStoredList(sortedList);
    const currentListIs = sortedList === list;
    //console.log("List sorted from ItemsList ", currentListIs);
  };
  /****End sortList funcion */
  /****input new item function to be passed as props.****/
  const inputNewItem = newItem => {
    //console.log("new item from App.js added", newItem);
    if (newItem !== undefined) {
      setList([...list, newItem]);
      setStoredList([...list, newItem]);
    }
  };
  /*********Edit function
   Take item clicked, 
   feed to input form wiht flag of isEditing
   open input form with details already in place to allow editing
  ******/
  editItem = itemID => {
    //const [isEditing, setIsEditing] = useState(false);
    setIsEditing(true);
    setCurrentItemEdit(itemID);
    console.log("EditItem was clicked->App.js", itemID);
  };

  toggleItem = itemID => {
    // console.log("Toggle Item clicked from App.js", itemID);
    // console.log(list);
    newList = list.map(item => {
      if (itemID === item.id) {
        console.log("item.id=", item.id);
        return { ...item, purchased: !item.purchased };
        //console.log("after setting purchased", list);
      }
      return item;
    });
    setList(newList);
    setStoredList(newList);
  };

  /***Removes individual item from list*****/
  clearItem = itemID => {
    //console.log("List from clearitem", list);
    //console.log("ClearItem was clicked->App.js", itemID);
    newList = list.filter(item => {
      if (itemID !== item.id) {
        console.log("Item ", itemID, itemID.name, " removed!");
        return { ...newList, item };
      }
    });
    //console.log("newList is: ", newList);
    setList(newList);
    setStoredList(newList);
  };

  return (
    <div className="App">
      <p />
      <div>
        {" "}
        <PageHeader
          inputNewItem={inputNewItem}
          sortOrder={sortOrder}
          isEditing={isEditing}
          currentItemEdit={currentItemEdit}
        />
      </div>
      <ItemsList
        list={list}
        setList={setList}
        storedList={storedList}
        setStoredList={setStoredList}
        toggleItem={toggleItem}
        editItem={editItem}
        clearItem={clearItem}
        /***Sending sort order state to ItemsList */
        settingSortOrder={settingSortOrder}
        sortOrder={sortOrder}
        sortList={sortList}
      />
    </div>
  );
}
