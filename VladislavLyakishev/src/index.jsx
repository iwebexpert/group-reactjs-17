import ReactDom from 'react-dom'
import React from 'react'
import {Grid, List, ListItem, ListItemIcon, ListItemText, Container, AppBar, Toolbar, IconButton, Button, Typography} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import MenuIcon from '@material-ui/icons/Menu'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import {ChatsNav} from './components/ChatsNav'

import {routes} from './routes'

import './index.scss'


ReactDom.render(
        <Container>
            <BrowserRouter>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <div className="menu-title">
                                <Typography variant="h6" className="menu-title_item">
                                    <Link to='/'>Chat</Link>
                                </Typography>
                                <Typography variant="h6" className="menu-title_item">
                                    <Link to='/profile'>Profile</Link>
                                </Typography>
                            </div>

                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Grid item container xs={12} spacing={2}>
                    <Grid item xs={4} className="chat-list">
                        <ChatsNav />
                    </Grid>
                    <Grid item xs={8}>
                            <Switch>
                                {routes.map( (route, index) => (
                                    <Route key={index} {...route} />
                                ))}
                            </Switch>
                    </Grid>
                </Grid>
            </Grid>
        </BrowserRouter>
        </Container>
    ,
    document.getElementById('root')
  )

