import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add an item"
        className="todo-input"
        value={input}
        onChange={handleChange}
      />
      <button className="todo-button" onSubmit={handleSubmit}>
        Add
      </button>
    </form>
  );
}

export default TodoForm;
