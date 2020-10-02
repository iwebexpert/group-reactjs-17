import React, {Component} from 'react';
import {ChatList} from '../ChatList';
import {Header} from '../Header';
import {SideMenu} from '../SideMenu';
import {Messenger} from '../Messenger';
import {Grid} from '@material-ui/core';
import {BrowserRouter, HashRouter, MemoryRouter, Switch, Route} from 'react-router-dom';
import {routes} from '../../routes';

export class Layout extends Component
{
    render()
    {
        return (
            <BrowserRouter>
                <Grid container>
                    <Grid item xs={12}>
                        <Header/>
                    </Grid>
                    <Grid item xs={2} className="sideMenu">
                        <SideMenu/>
                    </Grid>
                    <Grid container item xs={10} className="main">
                        <Switch>
                            {routes.map((route, index) => (<Route key={index} {...route} />))}
                        </Switch>
                    </Grid>
                    {/* <Grid item xs={3} className="chatlist">
                        <ChatList/>
                    </Grid>

                    <Grid item xs={9} className="messenger">
                        <Messenger/>
                    </Grid> */}
                </Grid>
            </BrowserRouter>
            );
    }
}