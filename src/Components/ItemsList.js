import React from "react";

import Item from "./Item";
//functional component
const ItemList = props => {
  //const sortedList = props.groceries.sort((a, b) => a.purchased -b.purchased);
  console.log("props from ItemList.js->", props);
  console.log("Current sort order is: ", props.sortOrder);
  //const listSort = props.sortOrder;
  /*****listSort can be natural, date, or category   */
  return (
    <div className="shopping-list">
      {props.list.map(item => (
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

      <div>
        <br />
        <p>
          <p>Sort by: </p>
          <button onClick={() => props.settingSortOrder("category")}>
            Category
          </button>
          <button onClick={() => props.settingSortOrder("date")}>Date</button>
          <button onClick={() => props.settingSortOrder("natural")}>
            Natural
          </button>
        </p>
      </div>
    </div>
  );
};

export default ItemList;
