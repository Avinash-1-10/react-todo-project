import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import './App.css'

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const handleSubmit = (newTodo) => {
    if (todos.some((t) => t.toDo === newTodo.toDo)) {
      alert("Todo already exists!");
      return;
    }

    if (editTodo) {
      const updatedTodos = todos.map((t) => {
        if (t.id === editTodo.id) {
          return { ...t, toDo: newTodo.toDo };
        }
        return t;
      });
      setTodos(updatedTodos);
      setEditTodo(null);
    } else {
      setTodos([newTodo, ...todos]);
    }

    setTodo("");
  };

  const handleDelete = (id) => {
    const filteredTodos = todos.filter((t) => t.id !== id);
    setTodos(filteredTodos);
  };

  const handleEdit = (id) => {
    const todoToEdit = todos.find((t) => t.id === id);
    setEditTodo(todoToEdit);
    setTodo(todoToEdit.toDo);
  };

  return (
    <div className="app">
      <div className="container">
        <TodoForm
          onSubmit={handleSubmit}
          todo={todo}
          setTodo={setTodo}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      </div>
      <div className="box">
        <TodoList todos={todos} handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
