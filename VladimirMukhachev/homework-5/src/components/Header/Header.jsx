import React, {Component} from 'react';
import {AppBar, Toolbar, Typography, Link, Button} from '@material-ui/core';



export class Header extends Component{
    render(){
        return(
          <AppBar position="relative">
            <Toolbar variant="dense" className="toolbar">
              <Typography variant="h6" noWrap>
                <Link variant="button" color="inherit" href="/">Главная</Link>
              </Typography>
              <Typography variant="h6" color="inherit" noWrap>&nbsp;|&nbsp;</Typography>
              <Typography variant="h6" noWrap>
                <Link variant="button" color="inherit" href="/about">О нас</Link>
              </Typography>
              <Typography variant="h6" color="inherit" noWrap>&nbsp;|&nbsp;</Typography>
              <Typography variant="h6" noWrap>
                <Link variant="button" color="inherit" href="/profile">Ваш Профиль</Link>
              </Typography>
            </Toolbar>
          </AppBar>
        );
    }
} 