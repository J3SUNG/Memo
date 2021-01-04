import React from "react";
import Greeting from "./function/Greeting";
import Clock from "./function/Clock";
import Background from "./function/Background";
import "./App.css";

function App() {
  // document.body.style.backgroundImage = `url(${bg})`;
  // document.body.style.backgroundImage = "url(/static/media/1.dcd9e70b.jpg)";
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
