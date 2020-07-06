import React from "react";

import Item from "./Item";
//functional component
const ItemList = props => {
  //const sortedList = props.groceries.sort((a, b) => a.purchased -b.purchased);
  //console.log("props from ItemList.js->", props);
  //console.log("Current sort order ItemList.js is: ", props.sortOrder);

  const sortList = property => {
    props.settingSortOrder(property);

    const property2 =
      property === "date" ? "name" : property === "category" ? "name" : "date";
    console.log("property2 is ", property2);
    const sortedList = props.list.sort((a, b) =>
      a[property] > b[property]
        ? 1
        : a[property] === b[property]
        ? a[property2] > b[property2]
          ? 1
          : -1
        : -1
    );
    props.setList(sortedList);
    const currentListIs = sortedList === props.list;
    console.log("List sorted from ItemsList");
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
          Sort by:
          <button onClick={() => sortList("category")}>Category</button>
          <button onClick={() => sortList("date")}>Date</button>
          <button onClick={() => sortList("name")}>Name</button>
        </p>
      </div>
    </div>
  );
};

export default ItemList;
