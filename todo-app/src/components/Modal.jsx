import React, { useState } from "react";

function Modal({ addTodo, closeModal }) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = () => {
    addTodo(newTodo);
    closeModal();
  };

  return (
    <div>
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal">
        <div className="inputContainer">
          <h2>New Note</h2>
          <input
            className="todo-input"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </div>

        <div className="buttons">
          <button onClick={handleSubmit}>Apply</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;