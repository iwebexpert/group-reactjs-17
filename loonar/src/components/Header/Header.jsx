import React, {Component} from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

export class Header extends Component{
    render(){
        return(
          <AppBar position="static">
          <Toolbar>
            <Typography variant="h5">
              GeekChat
            </Typography>
          </Toolbar>
        </AppBar>
        );
    }
}  