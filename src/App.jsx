import React from "react";
import Greeting from "./function/Greeting";
import Clock from "./function/Clock";
import Background from "./function/Background";
import ToDo from "./function/ToDo";
import Weather from "./function/Weather";
import "./App.css";

function App() {
  return (
    <div>
      <Background />
      <Greeting />
      <Clock />
      <ToDo />
      <Weather />
    </div>
  );
}

export default App;
