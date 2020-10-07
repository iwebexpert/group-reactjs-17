import React from 'react';

import './Header.css';
import {List, ListItem} from "@material-ui/core";
import {Link} from 'react-router-dom';

export const Header = () => {
  return (
    <div className="header-container">
      <div className="menu-container">
        <h2>GB React Messenger App</h2>
        <List className="menu-list">
          <ListItem>
            <Link className="menu-list" to='/'>Main Page</Link>
          </ListItem>
          <ListItem>
            <Link className="menu-list" to='/about'>About</Link>
          </ListItem>
          <ListItem>
            <Link className="menu-list" to='/profile'>Profile</Link>
          </ListItem>
          <ListItem>
            <Link className="menu-list" to='/pagenotfound'>Error</Link>
          </ListItem>
        </List>
      </div>
    </div>
  );
};
