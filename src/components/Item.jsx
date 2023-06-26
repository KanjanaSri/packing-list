import "./Item.scss";

export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      ></input>
      <span
        className="text"
        style={item.packed ? { textDecoration: "line-through" } : {}}
      >
        {item.description}
      </span>
      <span onClick={() => onDeleteItem(item.id)}>
        <i className="fa-solid fa-trash-can"></i>
      </span>
    </li>
  );
}
