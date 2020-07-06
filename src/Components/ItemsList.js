import React from "react";

import Item from "./Item";
//functional component
const ItemList = props => {
  //const sortedList = props.groceries.sort((a, b) => a.purchased -b.purchased);
  console.log("props from ItemList.js->", props);
  console.log("Current sort order ItemList.js is: ", props.sortOrder);
  //const listSort = props.sortOrder;
  /*****listSort can be natural, date, or category   */

  //a.date < a.date);

  const sortedList = props.list.sort((a, b) => {
    const newSort = props.sortOrder;
    a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
    // console.log("newsort value is: ", a.date);
  });
  const sortList = property => {
    props.settingSortOrder(property);
    console.log(
      "from sortList, sortorder, property",
      props.sortOrder,
      property
    );
    const sortedList = props.list.sort((a, b) => {
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      console.log("sortedList is ", a[property]);
    });
    props.setList(sortedList);
    console.log("sortedList from ItemList", sortedList);
    //let property = "";
    // props.list.map(item =>
    // console.log("sortList function", item.name, item.date)
    //);
    //props.settingSortOrder(property);
    //console.log("sort order", props.sortOrder);
    //let newList = props.list.slice().sort(props.list.property);
    //console.log("sorted list from sortList function-newList", newList);

    //const sortOrder = 1;
    // if (property[0] === "-") {
    //   sortOrder = -1;
    //   property = property.substr(1);
    // }
    return function(a, b) {
      let result =
        a.sortOrder < b.sortOrder ? -1 : a.sortOrder > b.sortOrder ? 1 : 0;
      console.log("result of sort sortList function", result);
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
          Sort by:
          <button onClick={() => sortList("category")}>Category</button>
          <button onClick={() => sortList("date")}>Date</button>
          <button onClick={() => sortList("natural")}>Natural</button>
        </p>
      </div>
    </div>
  );
};

export default ItemList;
