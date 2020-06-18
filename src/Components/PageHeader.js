import React, { useState, useEffect } from "react";
//import SimpleModal from "./ModalInputForm";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
//import Modal from "@material-ui/core/Modal";
import Modal from "./ModalForm";

import uniqueID from "./uniqueID";
function PageHeader(props) {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const itemUniqueID = uniqueID();
  const newItemToAdd = {
    name: "",
    category: "",
    id: itemUniqueID,
    purchased: false
  };
  const [newItem, setNewItem] = useState(newItemToAdd);
  console.log("props from pageheader.js", props);
  const clickHandler = event => {
    event.preventDefault();

    //props.inputNewItem();
    //return <SimpleModal />;
  };
  const changeHandler = () => {};

  const handleOpen = () => {};

  return (
    <div>
      <h1 className="header new-header shopping-list">Shopping List</h1>
      {modalOpen ? <Modal toggleModal={toggleModal} /> : null}
      <button onChange={changeHandler} onClick={toggleModal}>
        Add an Item
      </button>
      <p />
    </div>
  );
}

export default PageHeader;
