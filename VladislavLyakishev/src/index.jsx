import ReactDom from 'react-dom'
import React from 'react'
import {Grid, List, ListItem, ListItemIcon, ListItemText, Container, AppBar, Toolbar, IconButton, Button, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import {ChatsnavContainer} from './containers/ChatsnavContainer'
import {Provider} from 'react-redux'
import {initStore, history} from './store'
import {ConnectedRouter} from 'connected-react-router'
import {PersistGate} from 'redux-persist/integration/react'

import {routes} from './routes'

import './index.scss'

const {store, persisStore} = initStore();

ReactDom.render(
        <Provider store={store}>
                <PersistGate persistor={persisStore}>
                    <ConnectedRouter history={history}>
                        <Container>
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
                                        <ChatsnavContainer />
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
                        </Container>
                    </ConnectedRouter>
                </PersistGate>
        </Provider>
    ,
    document.getElementById('root')
  )

