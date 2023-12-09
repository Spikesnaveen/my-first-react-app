import AddItem from "./AddItem";
import Contents from "./Contents";
import Footer from "./Footer";
import Header from "./Header";
import SearchItem from "./SearchItem";
import "./index.css";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("todo_list"))
  );

  const [newItem, setNewItem] = useState('');

  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSubmitItem = (e) => {
    e.preventDefault()
    console.log(newItem)
    //setItems( (prevItems) => 
     // [...prevItems, {id: prevItems.length+1, checked:false, newItem}]
     // );
     const item = {
      id:items.length+1, checked:false, item:newItem
     }
    const updatedItems = [...items, item]
    setNewItem('')
    setItems(updatedItems)
    localStorage.setItem("todo_list", JSON.stringify(updatedItems));
  }

  return (
    <div className="App">
      <Header title="To Do List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmitItem={handleSubmitItem}
      />
      <SearchItem
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Contents
        items={items.filter(item => ((item.item).toLowerCase()).includes(searchTerm.toLowerCase()))}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
