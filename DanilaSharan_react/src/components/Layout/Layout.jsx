import React from 'react';

import './Layout.css';
import {Messenger} from "../Messenger";
import {Header} from "../Header";
import {ChatList} from "../ChatList";
import Grid from "@material-ui/core/Grid";

export const Layout = () => {
  return (
    <div className="main-container">
      <Header />
      <Grid container spacing={1}>
        <ChatList />
        <Messenger />
      </Grid>
    </div>
  );
};
