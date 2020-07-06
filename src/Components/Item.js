import React from "react";
//functional component
const edit = "Edit";
const clear = "Clear";

const Item = props => {
  const itemCategory = props.category;
  //const date = props.date.toLocaleDateString();
  let formatted_date =
    props.date.getDate() +
    "." +
    (props.date.getMonth() + 1) +
    "." +
    props.date.getFullYear();
  //Date.parse(props.date);
  //console.log("props from item.js->", props);
  return (
    <div className={`item${props.item.purchased ? " purchased" : ""}`}>
      <p
        onClick={() => {
          props.toggleItem(props.item.id);
        }}
      >
        {props.item.name}
        <span style={{ float: "right", margin: "5px" }}>
          {itemCategory}&nbsp;
        </span>
      </p>
      <span style={{ float: "left", margin: "10px" }}>
        {formatted_date}&nbsp;
      </span>
      <span
        onClick={() => props.clearItem(props.item.id)}
        style={{ float: "right", margin: "10px" }}
      >
        {clear}&nbsp;
      </span>

      <span
        onClick={() => {
          props.editItem(props.item.id);
        }}
        style={{ float: "right", margin: "10px" }}
      >
        {" "}
        {edit}&nbsp;
      </span>
    </div>
  );
};

export default Item;
