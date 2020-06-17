import React, { useState, useEffect } from "react";

function PageHeader() {
  const onClickHandler = () => {};
  const onChangeHandler = () => {};

  return (
    <div>
      <h1 className="header new-header shopping-list">Shopping List</h1>
      <p />
      <button onChange={onChangeHandler} onClick={onClickHandler}>
        Add an Item
      </button>
      <p />
    </div>
  );
}

export default PageHeader;
