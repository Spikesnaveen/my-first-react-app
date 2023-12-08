import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import "./index.css";

const LineItem = ({item, handleChecked, handleDelete}) => {
  return (
    <li key={item.id} className="item">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChecked(item.id)}
              />
              <label>{item.item}</label>
              <BsFillTrashFill
                role="button"
                onClick={() => handleDelete(item.id)}
                tabIndex="0"
              />
            </li>
  )
}

export default LineItem