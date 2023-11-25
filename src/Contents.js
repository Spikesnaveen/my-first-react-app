import React from "react";
import { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";

const Contents = () => {

    const [items, setItems] = useState(
        [
            {
                id:1,
                checked:true,
                item:"Do exercise"
            },
            {
                id:2,
                checked:true,
                item:"Learn React"
            },
            {
                id:3,
                checked:true,
                item:"Eat lunch"
            }
        ]
    )

    const handleChecked = (id) => {

        const itemsUpdated = items.map((item) => 
            item.id===id ? {...item, checked:!item.checked} : item
            )
        setItems(itemsUpdated)
        localStorage.setItem("todo_list", JSON.stringify(itemsUpdated))
    }

    const handleDelete = (id) => {

        const itemsDeleted = items.filter((item) => item.id!==id)
        setItems(itemsDeleted)
        localStorage.setItem("todo_list", JSON.stringify(itemsDeleted))
    }

    return (
        <main>
            {(items.length) ? (
            <ul>
                {items.map((item) => (
                    <li key={item.id} className="item">
                        <input type="checkbox" checked={item.checked} onChange={() => handleChecked(item.id)}/>
                        <label>{item.item}</label>
                        <BsFillTrashFill
                            role="button"
                            onClick={() => handleDelete(item.id)}
                            tabIndex="0"
                        />
                    </li>
                ))}
            </ul>
            ) : <p> Your List is empty</p>
            }
        </main>
    )

}

export default Contents;