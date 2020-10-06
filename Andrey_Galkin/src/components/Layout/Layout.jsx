import React from 'react';

import {Messenger} from "../Messenger";
import {Header} from "../Header";
import {ChatList} from "../ChatList";
import Grid from "@material-ui/core/Grid";

import './Layout.scss';

export const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <Grid container spacing={1}>
        <ChatList />
        <Messenger />
      </Grid>
    </div>
  );
};