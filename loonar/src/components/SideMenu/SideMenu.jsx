import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Paper, MenuList, MenuItem, AppBar, Toolbar, Typography, Button} from '@material-ui/core';

export class SideMenu extends Component{
    render(){
        return(
            <Paper className="menuPaper">
            <MenuList>
              <MenuItem component={Link} to="/">Главная</MenuItem>
              <MenuItem component={Link} to="/about">О нас</MenuItem>
              <MenuItem component={Link} to="/pagenotfound">Error</MenuItem>
            </MenuList>
          </Paper>
        );
    }
}  