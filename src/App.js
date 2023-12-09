import AddItem from "./AddItem";
import Contents from "./Contents";
import Footer from "./Footer";
import Header from "./Header";
import "./index.css";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Do exercise",
    },
    {
      id: 2,
      checked: true,
      item: "Learn React",
    },
    {
      id: 3,
      checked: true,
      item: "Eat lunch",
    },
  ]);

  const [newItem, setNewItem] = useState('');

  const handleChecked = (id) => {
    const itemsUpdated = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(itemsUpdated);
    localStorage.setItem("todo_list", JSON.stringify(itemsUpdated));
  };

  const handleDelete = (id) => {
    const itemsDeleted = items.filter((item) => item.id !== id);
    setItems(itemsDeleted);
    localStorage.setItem("todo_list", JSON.stringify(itemsDeleted));
  };

  const handleSubmitItem = (item) => {
    console.log("Inside handleSubmitItem")
    console.log(item)
    setItems( (prevItems) => 
      [...prevItems, {id: prevItems.length+1, checked:false, item}]
      );
  }

  return (
    <div className="App">
      <Header title="To Do List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmitItem={handleSubmitItem}
      />
      <Contents
        items={items}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
