import React, { useState, useRef } from "react";
import ToDoList from "./ToDoList";
// const toDoForm = document.querySelector(".js-toDoForm");
// const toDoInput = toDoForm.querySelector("input");

const ToDo = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const ulRef = useRef(null);
  const TODOS_LS = "toDos";
  let toDos = [];

  // // const filterFn = (toDo) => {
  // //   return toDo.id === 1;
  // // };

  // const deleteToDo = (event) => {
  //   const btn = event.target;
  //   const li = btn.parentNode;
  //   ulRef.removeChild(li);
  //   const cleanToDos = toDos.filter(function (toDo) {
  //     return toDo.id !== parseInt(li.id);
  //   });
  //   toDos = cleanToDos;
  //   saveToDos();
  // };

  const saveToDos = () => {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  };

  const paintToDo = (text) => {
    // let id = null;
    // const delBtn = <button>X</button>;
    // const span = <span>{text}</span>;
    // const li = (
    //   <li>
    //     {id}
    //     {span}
    //     {delBtn}
    //   </li>
    // );
    const newId = toDos.length + 1;
    // delBtn.addEventListener("click", deleteToDo);
    // span.innerText = text;
    // li.appendChild(span);
    // li.appendChild(delBtn);
    // ulRef.appendChild(li);
    const toDoObj = {
      text: text,
      id: newId,
    };
    toDos.push(toDoObj);
    saveToDos();
  };

  const something = (toDo) => {
    paintToDo(toDo.text);
  };

  const loadToDos = () => {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
      const parsedToDos = JSON.parse(loadedToDos);
      parsedToDos.forEach(something);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentValue = value;
    paintToDo(currentValue);

    inputRef.current.focus();
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  loadToDos();
  console.log(toDos[0].id);
  console.log(toDos[0].text);
  const list = toDos.map((toDo, index) => (
    <ToDoList key={index} id={toDo.id} text={toDo.text}></ToDoList>
  ));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          onChange={onChangeInput}
          value={value}
          placeholder="write a to do"
        />
      </form>
      <ul ref={ulRef}>{list}</ul>
    </>
  );
};

export default ToDo;
