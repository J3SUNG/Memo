import React from "react";
import Greeting from "./function/Greeting";
import Clock from "./function/Clock";
import Background from "./function/Background";
// import ToDo from "./function/ToDo";
import "./App.css";

function App() {
  // document.body.style.backgroundImage = `url(${bg})`;
  // document.body.style.backgroundImage = "url(/static/media/1.dcd9e70b.jpg)";
  return (
    <div>
      <Background />
      <Greeting />
      <Clock />

      <ul className="js-toDoList"></ul>
      <span className="js-weather"></span>
    </div>
  );
}

export default App;
