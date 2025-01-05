import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, editTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;