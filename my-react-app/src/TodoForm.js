import React from "react";

function TodoForm({ onSubmit, todo, setTodo, editTodo, setEditTodo }) {
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") {
      alert("Todo cannot be empty!");
      return;
    }
    if (todo.trim().length > 15) {
      alert("Todo cannot be more than 15 characters!");
      return;
    }
    if (onSubmit && typeof onSubmit === "function") {
      onSubmit({
        id: editTodo ? editTodo.id : new Date().getTime(),
        toDo: todo,
      });
      setEditTodo(null);
      setTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={todo} onChange={handleChange} />
      <button type="submit">{editTodo ? "Save" : "Add"} Todo</button>
    </form>
  );
}

export default TodoForm;
