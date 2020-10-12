import React from 'react';

import './ChatList.css';

import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import {Button} from "@material-ui/core";

export const ChatList = (props) => {
  const {chatsList, handleChatAdd,} = props;
  return (
    <Grid item xs={3} >
      <List component="nav" className="chat-list-container">
        {chatsList}
        <Button
          className='cht-add-btn'
          onClick={handleChatAdd}
        >
          Добавить
        </Button>
      </List>
    </Grid>
  );
};
