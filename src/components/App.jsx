import { useState } from "react";
import "./App.scss";
import Header from "./Header";
import Form from "./Form";
import PackingList from "./PackingList";
import initialItems from "../initialItems";

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items?.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items?.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList(category) {
    const confirmed = window.confirm(
      `Are you sure you want to delete all items in ${category} list?`
    );
    if (confirmed)
      setItems((items) => items?.filter((item) => item.category !== category));
  }

  return (
    <>
      <Header onAddItems={handleAddItems} />
      <Form onAddItems={handleAddItems} />

      <div className="cards">
        <PackingList
          items={items}
          category={"essentials"}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearList={handleClearList}
        >
          <i className="fa-solid fa-address-card"></i>
          Essentials
        </PackingList>
        <PackingList
          items={items}
          category={"clothes"}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearList={handleClearList}
        >
          <i className="fa-solid fa-socks"></i>
          Clothes
        </PackingList>
        <PackingList
          items={items}
          category={"toiletries"}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearList={handleClearList}
        >
          <i className="fa-solid fa-spa"></i>
          Toiletries
        </PackingList>
        <PackingList
          items={items}
          category={"other"}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearList={handleClearList}
        >
          <i className="fa-solid fa-camera-retro"></i>
          Other
        </PackingList>
      </div>
    </>
  );
}
