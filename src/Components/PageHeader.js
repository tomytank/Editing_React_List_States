import React, { useState, useEffect } from "react";
//import SimpleModal from "./ModalInputForm";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import uniqueID from "./uniqueID";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  })
);

function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

function PageHeader(props) {
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
    return <SimpleModal />;
  };
  const changeHandler = () => {};

  const handleOpen = () => {};
  const body = (
    <div>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      <SimpleModal />
    </div>
  );
  return (
    <div>
      <h1 className="header new-header shopping-list">Shopping List</h1>

      <button onChange={changeHandler} onClick={clickHandler}>
        Add an Item
      </button>
      <p />
    </div>
  );
}

export default PageHeader;
