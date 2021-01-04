// const toDoForm = document.querySelector(".js-toDoForm");
// const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.querySelector(".js-toDoList");

// const TODOS_LS = "toDos";

// const filterFn = (toDo) => {
//   return toDo.id === 1;
// };

// let toDos = [];

// const deleteToDo = () => {
//   const btn = event.target;
//   const li = btn.parentNode;
//   toDoList.removeChild(li);
//   const cleanToDos = toDos.filter(function (toDo) {
//     return toDo.id !== parseInt(li.id);
//   });
//   toDos = cleanToDos;
//   saveToDos();
// };

// const saveToDos = () => {
//   localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
// };

// const paintToDo = (text) => {
//   const li = document.createElement("li");
//   const delBtn = document.createElement("button");
//   const span = document.createElement("span");
//   const newId = toDos.length + 1;
//   delBtn.innerText = "X";
//   delBtn.addEventListener("click", deleteToDo);
//   span.innerText = text;
//   li.appendChild(span);
//   li.appendChild(delBtn);
//   li.id = newId;
//   toDoList.appendChild(li);
//   const toDoObj = {
//     text: text,
//     id: newId,
//   };
//   toDos.push(toDoObj);
//   saveToDos();
// };

// const handleSubmit = (event) => {
//   event.preventDefault();
//   const currentValue = toDoInput.value;
//   paintToDo(currentValue);
// };

// const something = (toDo) => {
//   paintToDo(toDo.text);
// };

// const loadToDos = () => {
//   const loadedToDos = localStorage.getItem(TODOS_LS);
//   if (loadedToDos !== null) {
//     const parsedToDos = JSON.parse(loadedToDos);
//     parsedToDos.forEach(something);
//   }
// };

const ToDo = () => {
  // loadToDos();
  // toDoForm.addEventListener("submit", handleSubmit);

  return (
    <>
      <div>Hello</div>
    </>
  );
};

export default ToDo;
