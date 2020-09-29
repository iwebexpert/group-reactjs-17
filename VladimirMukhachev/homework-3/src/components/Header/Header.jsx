import React, {Component} from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

export class Header extends Component{
    render(){
        return(
            <AppBar position="relative">
            <Toolbar>
              <Typography variant="h6" color="inherit" noWrap>
                Site Logo
              </Typography>
            </Toolbar>
          </AppBar>
        );
    }
} 