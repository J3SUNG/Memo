import React, { useState, useRef } from "react";

function Greeting() {
  const USER = "currentUser";
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  let input_style = "display_none";
  let greet_style = "display_none";

  function saveName(text) {
    localStorage.setItem(USER, text);
  }

  function askForName() {
    input_style = "display_block";
  }

  function showGreeting(text) {
    input_style = "display_none";
    greet_style = "display_block";
    if (name !== text) {
      setName(text);
    }
  }

  function loadName() {
    const currentUser = localStorage.getItem(USER);
    if (currentUser === null) {
      askForName();
    } else {
      showGreeting(currentUser);
    }
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    const currentValue = value;
    showGreeting(currentValue);
    saveName(currentValue);

    inputRef.current.focus();
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  loadName();

  return (
    <>
      <form className={input_style} onSubmit={onSubmitForm}>
        <input
          ref={inputRef}
          placeholder="What is your name?"
          onChange={onChangeInput}
          value={value}
        />
      </form>
      <div className={greet_style}>Hello {name}</div>
    </>
  );
}

export default Greeting;
