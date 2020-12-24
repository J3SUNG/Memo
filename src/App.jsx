import React from "react";
import Greeting from "./function/Greeting";
import "./App.css";

function App() {
  return (
    <div>
      <Greeting />

      <div className="js-clock">
        <h1>00:00</h1>
      </div>
      <form className="js-form form">
        <input type="text" placeholder="What is your name?" />
      </form>
      <div className="js-greetings greetings"></div>
      <form className="js-toDoForm">
        <input type="text" placeholder="write a to do" />
      </form>
      <ul className="js-toDoList"></ul>
      <span className="js-weather"></span>
    </div>
  );
}

export default App;
