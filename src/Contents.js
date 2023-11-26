import React from "react";
import { ItemsList } from "./ItemsList";

const Contents = ({ items, handleChecked, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemsList
          items={items}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
        />
      ) : (
        <p> Your List is empty</p>
      )}
    </main>
  );
};

export default Contents;
