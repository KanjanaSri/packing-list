import { useState } from "react";
import Item from "./Item";
import "./PackingList.scss";

export default function PackingList({
  items,
  category,
  onDeleteItem,
  onToggleItem,
  onClearList,
  children,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  function filterByCategory(category) {
    return items?.filter((item) => item.category === category);
  }
  const filteredList = filterByCategory(category);

  let sortedItems = filteredList
    .slice()
    .sort((a, b) => Number(a.packed) - Number(b.packed));

  function handleDeleteAll() {
    setIsOpen(false);
    onClearList(category);
  }

  return (
    <div className="category-card">
      <div className="title-container">
        <span className="card-title">{children}</span>
        <button className="open" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <i className="fa-solid fa-sort-up"></i>
          ) : (
            <i className="fa-solid fa-sort-down"></i>
          )}
        </button>

        <ul className={`action ${isOpen ? "show" : ""}`}>
          <li onClick={() => setIsSorted(!isSorted)}>
            <i className="fa-solid fa-sort"></i>Sort List
          </li>
          <li onClick={() => handleDeleteAll()}>
            <i className="fa-solid fa-ban"></i>Delete All
          </li>
        </ul>
      </div>

      <ul className="card-text">
        {(isSorted ? sortedItems : filteredList).map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}
