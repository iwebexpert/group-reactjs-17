import ReactDom from 'react-dom'
import React from 'react'
import {Messenger} from 'components/Messenger'
import {Grid, List, ListItem, ListItemIcon, ListItemText, Container, AppBar, Toolbar, IconButton, Button, Typography} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import MenuIcon from '@material-ui/icons/Menu'


import './index.scss'

ReactDom.render(
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" className="menu-title">
                                Chat
                            </Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Grid item container xs={12} spacing={2}>
                    <Grid item xs={3} className="chat-list">
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItem button>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Drafts" />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={9}>
                        <Messenger />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    ,
    document.getElementById('root')
  )

