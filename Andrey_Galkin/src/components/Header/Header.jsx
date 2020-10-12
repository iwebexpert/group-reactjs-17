import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';

import './Header.scss';

export class Header extends Component {
render() {
  return (
      <div className="header">
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Messenger+
            </Typography>
            <div className="header-buttons">
              <Link to="/">
                <Button color="inherit">Home</Button>
              </Link>
              <Link to="/profile">
                <Button color="inherit">Profile</Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <div className="header-breadcrumb">
          <h1>Header</h1>
        </div>
      </div>
    );
  }
}