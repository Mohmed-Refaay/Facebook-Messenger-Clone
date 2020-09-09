import React, { useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([]);

  console.log(message);

  const sendMessage = (e) => {
    e.preventDefault();
    setMessage([...message, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>hello</h1>
      
      <form><FormControl>
        <InputLabel>Enter You Message..</InputLabel>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={sendMessage}
        >
          Send A Message
        </Button>
      </FormControl></form>

      {message.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
