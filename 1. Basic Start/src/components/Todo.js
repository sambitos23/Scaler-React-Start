import React from "react";
import "../style/todo.css";

function Todo({ todo }) {
  return (
    <div className="todo">
      {todo.id}. {todo.title}
    </div>
  );
}

export default Todo;
