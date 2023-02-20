import React from "react";

function TodoList({ todos, handleEdit, handleDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.toDo}
          <button onClick={() => handleEdit(todo.id)} id="edit">
            Edit
          </button>
          <button onClick={() => handleDelete(todo.id)} id="delete">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
