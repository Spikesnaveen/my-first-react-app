import React from "react";
import { FaPlus  } from "react-icons/fa";
import "./index.css";

const AddItem = ({newItem,setNewItem,handleSubmitItem}) => {
  return (
    <form className="addForm" onSubmit={(e) => handleSubmitItem(e)}>
        <label htmlFor="addItem">Add Item</label>
        <input
            autoFocus
            id="addItem"
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="addItem"
            required
        />
        <button type="submit">
            <FaPlus
            role="button"/>
        </button>
    </form>
  )
}

export default AddItem