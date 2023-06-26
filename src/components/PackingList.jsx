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
  const [isSorted, setIsSorted] = useState(false);

  function filterByCategory(category) {
    return items?.filter((item) => item.category === category);
  }
  const filteredList = filterByCategory(category);

  let sortedItems = filteredList
    .slice()
    .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="category-card">
      <div className="action">
        <span className="card-title">{children}</span>
        <div>
          <span onClick={() => onClearList(category)}>
            <i className="fa-solid fa-circle-xmark"></i>
          </span>
          <span onClick={() => setIsSorted(!isSorted)}>
            <i className="fa-solid fa-sort"></i>
          </span>
        </div>
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
