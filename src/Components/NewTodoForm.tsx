import { useState } from "react";
interface Props {
    onSubmit: (items: string) => void;
  }
export function NewTodoForm({onSubmit}:Props) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
        if(newItem === "") return

        onSubmit(newItem);
  

        setNewItem("");
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
