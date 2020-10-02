import React from 'react';

import './ChatList.css';

import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";

export const ChatList = (chatsList) => {
  console.log(chatsList.chatsList)
  const list = chatsList.chatsList;
  return (
    <Grid item xs={3} className="chat-list-container">
      <List component="nav">
        {list}
      </List>
    </Grid>
  );
};
