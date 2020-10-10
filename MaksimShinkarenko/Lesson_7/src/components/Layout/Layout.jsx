import React, {Component} from "react";
import {Grid} from '@material-ui/core';

import {Header} from '../Header';

import './Layout.scss';
import {chats} from "../../helpers/chatsData";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ConnectedRouter} from 'connected-react-router';
import {PersistGate} from 'redux-persist/integration/react';
import {routes} from "../../routes";


export class Layout extends Component {
    state = {
        chats,
    };

    onChatAdd = data => {
        this.setState({chats: data.chats})
    };

    render() {
        return (
            <PersistGate persistor={this.props.persistor}>
                <ConnectedRouter history={this.props.history}>
                    <Grid container direction='column' className='layout' spacing={2}>
                        <Grid item>
                            <Header/>
                        </Grid>
                        <Grid container className={'main-container'}>
                            <Switch>
                                {routes.map((route, index) => (<Route key={index} {...route}/>))}
                            </Switch>
                        </Grid>
                    </Grid>
                </ConnectedRouter>
            </PersistGate>
        )
    }
}