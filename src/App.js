import AddItem from "./AddItem";
import Contents from "./Contents";
import Footer from "./Footer";
import Header from "./Header";
import SearchItem from "./SearchItem";
import "./index.css";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("todo_list")) || []);

  const [newItem, setNewItem] = useState('');

  const [searchTerm, setSearchTerm] = useState('');

  useEffect( () => {
    console.log("Inside use effect")
    localStorage.setItem("todo_list", JSON.stringify(items));
  }, [items])

  const handleChecked = (id) => {
    console.log("Inside handle checked")
    const itemsUpdated = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(itemsUpdated);
  };

  const handleDelete = (id) => {
    console.log("Inside handle delete")
    const itemsDeleted = items.filter((item) => item.id !== id);
    setItems(itemsDeleted);
  };

  const handleSubmitItem = (e) => {
    console.log("Inside handle submit item")
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
