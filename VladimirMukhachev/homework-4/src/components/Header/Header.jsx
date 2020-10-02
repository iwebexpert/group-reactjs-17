import React, {Component} from 'react';
import {AppBar, Toolbar, Typography, Link, Button} from '@material-ui/core';



export class Header extends Component{
    render(){
        return(



          // <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
          //   <Toolbar className={classes.toolbar}>
          //     <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          //       Company chat
          //     </Typography>
          //     <nav>
          //       <Link variant="button" color="textPrimary" href="#" className={classes.link}>
          //         Features
          //       </Link>
          //       <Link variant="button" color="textPrimary" href="#" className={classes.link}>
          //         Enterprise
          //       </Link>
          //       <Link variant="button" color="textPrimary" href="#" className={classes.link}>
          //         Support
          //       </Link>
          //     </nav>
          //     <Button href="#" color="primary" variant="outlined" className={classes.link}>
          //       Login
          //     </Button>
          //   </Toolbar>
          // </AppBar>




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
                <Link variant="button" color="inherit" href="/profile">Profile</Link>
              </Typography>
              <Typography variant="h6" color="inherit" noWrap>&nbsp;|&nbsp;</Typography>
              <Typography variant="h6" noWrap>
                <Link variant="button" color="inherit" href="/404">404</Link>
              </Typography>            
            </Toolbar>
          </AppBar>


          // <ListItem>
          // <Link to="/"><ListItemText primary="Главная" /></Link>
          // </ListItem>
          // <ListItem>
          // <Link to="/about"><ListItemText primary="О нас" /></Link>
          // </ListItem>
          // <ListItem>
          // <Link to="/pagenotfount"><ListItemText primary="Страница с ошибкой" /></Link>
          // </ListItem>

        );
    }
} 