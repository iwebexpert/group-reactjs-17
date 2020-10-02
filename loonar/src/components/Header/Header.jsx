import React, {Component} from 'react';
import {AppBar, Toolbar, Typography, Link, Button} from '@material-ui/core';

export class Header extends Component{
    render(){
        return(
          <AppBar position="static">
          <Toolbar>
            <Typography variant="h5">
              <Link variant="button" color="inherit" href="/profile">Profile</Link>
            </Typography>
          </Toolbar>
        </AppBar>
        );
    }
}  