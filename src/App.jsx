import React from "react";
import Greeting from "./function/Greeting";
import Clock from "./function/Clock";
import Background from "./function/Background";
import "./App.css";

function App() {
  return (
    <div>
      <Background />
      <Greeting />
      <Clock />

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
