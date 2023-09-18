import React from "react";

function Todo({ todos, removeTodo }) {
  return todos.map((todo, index) => (
    <div className="todo-row" key={index}>
      <div key={todo.id}>{todo.text}</div>
      <div className="buttons">
        <button onClick={() => removeTodo(todo.id)}>Delete</button>
      </div>
    </div>
  ));
}

export default Todo;
