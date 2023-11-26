import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

const Contents = ({ items, handleChecked, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
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
          ))}
        </ul>
      ) : (
        <p> Your List is empty</p>
      )}
    </main>
  );
};

export default Contents;
