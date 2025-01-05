import React, { useState } from "react";

function TodoItem({ todo, index, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(todo);
  const [isChecked, setIsChecked] = useState(false); // State for checkbox

  const handleEdit = () => {
    editTodo(index, updatedTodo);
    setIsEditing(false);
  };

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev); // Toggle the checkbox state
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <input
          type="text"
          className="editInput"
          value={updatedTodo}
          onChange={(e) => setUpdatedTodo(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={(e) => e.key === "Enter" && handleEdit()}
          autoFocus
        />
      ) : (
        <div className="todo-content">
          <input
            type="checkbox"
            className="checkBox"
            onChange={handleCheckboxChange}
            checked={isChecked}
          />
          <span
            style={{
              textDecoration: isChecked ? "line-through" : "none",
              color: isChecked ? "lightgray" : "inherit",
            }}
          >
            {todo}
          </span>
          <div className="todo-actions">
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              <i className="fa-solid fa-pencil"></i>
            </button>
            <button className="delete-button" onClick={() => deleteTodo(index)}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export default TodoItem;