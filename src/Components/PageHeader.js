import React, { useState, useEffect } from "react";

function PageHeader(props) {
  const clickHandler = event => {
    event.preventDefault();
    props.inputNewItem();
  };
  const changeHandler = () => {};

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
