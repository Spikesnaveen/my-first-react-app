import React from "react";

import LineItem from "./LineItem";

export const ItemsList = ({items, handleChecked, handleDelete}) => {
  return (
    <ul>
          {items.map((item) => (
            <LineItem item = {item} key={item.key} handleChecked={handleChecked} handleDelete={handleDelete} />
          ))}
        </ul>
  )
}
