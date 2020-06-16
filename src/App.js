import React, { useState } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import data from "./data";
import "./styles.css";

import InputForm from "./Components/InputForm";
import Settings from "./Components/Settings";
import ItemsList from "./Components/ItemsList";

export default function App() {
  const [listItem, setListItem] = useState();
  const [list, setList] = useState(data);
  console.log(list);
  toggleItem = itemID => {};

  clearItem = itemID => {};

  editItem = itemID => {};

  addItem = itemID => {};

  return (
    <div className="App">
      <ItemsList list={list} />

      {/* <h1>Hello CodeSandbox</h1>

      <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
