import React from "react";
import Greeting from "./function/Greeting";

function App() {
  return (
    <div>
      <Greeting />

      <div class="js-clock">
        <h1>00:00</h1>
      </div>
      <form class="js-form form">
        <input type="text" placeholder="What is your name?" />
      </form>
      <div class="js-greetings greetings"></div>
      <form class="js-toDoForm">
        <input type="text" placeholder="write a to do" />
      </form>
      <ul class="js-toDoList"></ul>
      <span class="js-weather"></span>
    </div>
  );
}

export default App;
