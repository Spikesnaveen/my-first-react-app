import React from "react";
import { useState } from "react";

const Contents = () => {

     const [name, setName] = useState("Naveen");

     const handleNameChange = () => {
         const names = ["Naveen", "RP", "Mani"];
         const int = Math.floor(Math.random()*3);
         setName(names[int]);
     }

    return (
        <main>
            <p> Lets {name} Money  </p>
            <button onClick={handleNameChange}> Subscribe </button>
        </main>
    )

}

export default Contents;