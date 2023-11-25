import React from "react";
import { useState } from "react";

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

    return (
        <main>
            <ul>
                {items.map((item) => (
                    <li>
                        <input type="checkbox" checked={item.checked} />
                        <label>{item.item}</label>
                        <button>Delete</button>
                    </li>
                ))}
            </ul>
        </main>
    )

}

export default Contents;