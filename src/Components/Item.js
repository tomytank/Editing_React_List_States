import React from "react";
//functional component
const edit = "Edit";
const clear = "Clear";

const Item = props => {
  const date = props.date.toLocaleDateString(); //Date.parse(props.date);
  //console.log("props from item.js->", props);
  return (
    <div className={`item${props.item.purchased ? " purchased" : ""}`}>
      <p
        onClick={() => {
          props.toggleItem(props.item.id);
        }}
      >
        {props.item.name}
      </p>
      <span style={{ float: "left", margin: "10px" }}>{date}&nbsp;</span>
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
