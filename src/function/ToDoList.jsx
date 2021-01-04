import React from "react";

const ToDoList = (toDo) => {
  return (
    <li id={toDo.id}>
      <div>
        {toDo.text}
        <button>X</button>
      </div>
    </li>
  );
};

export default ToDoList;
