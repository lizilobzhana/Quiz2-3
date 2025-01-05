import React, { useState } from "react";
import TodoList from "./TodoList";
import Modal from "./Modal";
import { use } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  //
  const checkTodo = (checkTodo) => {};
  //

  const editTodo = (indexToEdit, updatedTodo) => {
    const updatedTodos = todos.map((todo, index) =>
      index === indexToEdit ? updatedTodo : todo
    );
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark-mode");
      document.body.style.backgroundColor = "#333";
      document.body.style.color = "#fff";
    } else {
      document.body.classList.remove("dark-mode");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    }
  };
  return (
    <div>
      <h1>Todo List</h1>
      <div
        className="headerButtons"
        style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
      >
        <input
          type="text"
          className="searchTodo"
          placeholder="Search Todos"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="filter-darkmode">
          <button className="filter">
            ALL <i className="fa-solid fa-chevron-down"></i>
          </button>
          <button className="darkMode" onClick={toggleDarkMode}>
            {darkMode ? (
              <i className="fa-regular fa-sun"></i>
            ) : (
              <i className="fa-regular fa-moon"></i>
            )}
          </button>
        </div>

        <button
          className="add-button"
          onClick={() => {
            console.log("Button clicked!");
            setModalOpen(true);
          }}
        >
          +
        </button>
      </div>
      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
      {isModalOpen && (
        <Modal addTodo={addTodo} closeModal={() => setModalOpen(false)} />
      )}
    </div>
  );
}

export default TodoApp;