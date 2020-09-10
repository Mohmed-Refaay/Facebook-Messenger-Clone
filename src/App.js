import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";
import FlipMove from "react-flip-move";
import Message from "./Message";
import { db } from "./firebase";
import firebase from "firebase";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
function App() {
  const [input, setInput] = useState(" ");
  const [message, setMessage] = useState([]);
  const [username, setUsername] = useState(" ");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessage(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage([...message, { username: username, text: input }]);
    setInput("");
  };
  return (
    <div className="App">
      <img
        width="100px"
        style={{ margin: "10px" }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Facebook_Messenger_logo.svg/476px-Facebook_Messenger_logo.svg.png"
        alt=""
      />
      <h1>Messenger Clone</h1>

      {username ? (
        <h2>Welcome {username}</h2>
      ) : (
        <h2>Please try to restart and fill the inputs, there's missing data</h2>
      )}
      <form className="app__form">
        <FormControl className="app__formcontrol">
          <div style={{width: '100%'}} className="app__formcontrol--input">
            <InputLabel >Enter You Message..</InputLabel>
            <Input
            style={{width: '100%'}}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
          </div>

          <IconButton
            disabled={!input || !username}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {message.map((message) => (
          <Message username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
