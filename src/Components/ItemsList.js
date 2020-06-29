import React from "react";

import Item from "./Item";
//functional component
const ItemList = props => {
  //const sortedList = props.groceries.sort((a, b) => a.purchased -b.purchased);
  console.log("props from ItemList.js->", props);
  console.log("Current sort order ItemList.js is: ", props.sortOrder);
  //const listSort = props.sortOrder;
  /*****listSort can be natural, date, or category   */
  const sortedList = props.list.sort((a, b) => a.date - a.date);
  console.log("sortedList ", sortedList);

  const sortList = property => {
    //let property = "";
    props.settingSortOrder("category");
    const sortOrder = 1;
    // if (property[0] === "-") {
    //   sortOrder = -1;
    //   property = property.substr(1);
    // }
    return function(a, b) {
      let result =
        a.category < b.category ? -1 : a.category > b.category ? 1 : 0;
      console.log("result of sort", result);
      console.log("sorted list", props.list.sort(sortList(props.list.name)));
    };
  };

  return (
    <div className="shopping-list">
      {/***this is 'natural' sort */ props.list.map(item => (
        <Item
          key={item.id}
          item={item}
          date={item.date}
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
          <h3>Sort by: </h3>
          <button onClick={() => sortList(props.list)}>Category</button>
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
