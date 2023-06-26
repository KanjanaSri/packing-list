import { useState } from "react";
import "./Form.scss";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [category, setCatagory] = useState("other");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description,
      category,
      packed: false,
      id: crypto.randomUUID(),
    };
    console.log(newItem);
    onAddItems(newItem);

    setDescription("");
    setCatagory("other");
  }

  function handleChange(e) {
    setDescription(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="add-form">
        <label className="seclect-container">
          Category:
          <select
            value={category}
            onChange={(e) => setCatagory(e.target.value)}
            className="selection"
          >
            <option value="other" key="other">
              Other
            </option>
            <option value="clothes" key="clothes">
              Clothes
            </option>
            <option value="toiletries" key="toiletries">
              Toiletries
            </option>
            <option value="essentials" key="essentials">
              Essentials
            </option>
          </select>
        </label>

        <div className="input-container">
          <input
            className="add-input"
            type="text"
            placeholder="Add item..."
            value={description}
            onChange={handleChange}
          ></input>
          <button className="add-icon">
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </form>
  );
}
