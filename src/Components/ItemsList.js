import React from "react";

import Item from "./Item";
//functional component
const ItemList = props => {
  //const sortedList = props.groceries.sort((a, b) => a.purchased -b.purchased);
  //console.log("props from ItemList.js->", props);
  //console.log("Current sort order ItemList.js is: ", props.sortOrder);
  let sortDirection = 1;
  const sortList = property => {
    console.log("Current property value ", property);
    console.log("Current sortOrder value ", props.sortOrder);
    console.log("property = props.sortOrder", property === props.sortOrder);
    //let sortDirection = 1;
    console.log("Sortdirection before negation", sortDirection);
    if (property === props.sortOrder) {
      console.log("property = props.sortOrder", property === props.sortOrder);
      sortDirection = -1 * sortDirection;
      console.log("sortDirection ", sortDirection);
    }
    //sortDirection = -1 * sortDirection;
    props.settingSortOrder(property);
    console.log("sortOrder value changed to ", props.sortOrder);

    const property2 =
      property === "date" ? "name" : property === "category" ? "name" : "date";
    console.log("property2 is ", property2);
    const sortedList = props.list.sort((a, b) =>
      a[property] > b[property]
        ? sortDirection
        : a[property] === b[property]
        ? a[property2] > b[property2]
          ? sortDirection
          : -1 * sortDirection
        : -1 * sortDirection
    );
    props.setList(sortedList);
    props.setStoredList(sortedList);
    const currentListIs = sortedList === props.list;
    console.log("List sorted from ItemsList ", currentListIs);
  };
  //sortList(props.sortOrder);
  return (
    <div className="shopping-list">
      {props.list.map(item => (
        <Item
          key={item.id}
          item={item}
          date={item.date}
          category={item.category}
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
          Sort by:&nbsp;
          <button onClick={() => props.sortList("category")}>Category</button>
          <button onClick={() => props.sortList("date")}>Date</button>
          <button onClick={() => props.sortList("name")}>Name</button>
        </p>
      </div>
    </div>
  );
};

export default ItemList;
