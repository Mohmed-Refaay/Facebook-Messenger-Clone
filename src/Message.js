import "./Message.css";
import React, { forwardRef } from "react";

import { Card, Typography, CardContent } from "@material-ui/core";

const Message = forwardRef(({username, message}, ref) => {
  const isUser = username === message.username;
  return (
    <Card
      ref={ref}
      className={isUser ? "message message__user" : "message message__guest"}
    >
      <CardContent>
        <Typography color="white" variant="h5" component="h2">
          {!isUser && `${message.username} :` } {message.message}
        </Typography>
      </CardContent>
    </Card>
  );
});

export default Message;
