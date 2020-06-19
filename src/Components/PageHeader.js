import React, { useState, useEffect } from "react";
//import SimpleModal from "./ModalInputForm";


//import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
//import Modal from "@material-ui/core/Modal";
import ModalForm from "./ModalForm";

import uniqueID from "./uniqueID";
function PageHeader(props) {
  console.log("props from pageheader.js", props);
  // const itemUniqueID = uniqueID();
  // const newItemToAdd = {
  //   name: "",
  //   category: "",
  //   id: itemUniqueID,
  //   purchased: false
  // };
  //const [newItem, setNewItem] = useState(newItemToAdd);

  //const clickHandler = event => {
  //event.preventDefault();
  //};

  /*****Modal input screen state for open/close******/

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  /*****Close Modal input screen******/
  //const changeHandler = () => {};

  //const handleOpen = () => {};

  return (
    <div>
      <h1 className="header new-header shopping-list">Shopping List</h1>
      {modalOpen ? (
        <ModalForm
          toggleModal={toggleModal}
          inputNewItem={props.inputNewItem}
        />
      ) : null}
      <button onClick={toggleModal}>Add an Item</button>
      <p />
    </div>
  );
}

export default PageHeader;
