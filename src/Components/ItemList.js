import React from "react";

import Item from "./Item";
//functional component
const GroceryList = props => {
  //const sortedList = props.groceries.sort((a, b) => a.purchased -b.purchased);
  console.log("props from groceryList.js->", props);
  return (
    <div className="shopping-list">
      {props.groceries.map(item => (
        <Item
          key={item.id}
          item={item}
          toggleItem={props.toggleItem}
          clearItem={props.clearItem}
          editItem={props.editItem}
          deleteItem={props.deleteItem}
        />
      ))}
      <button className="clear-btn" onClick={props.deleteItem}>
        Clear purchased
      </button>
    </div>
  );
};

export default GroceryList;
