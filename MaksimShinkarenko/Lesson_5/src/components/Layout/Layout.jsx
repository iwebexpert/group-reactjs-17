import React, {Component} from "react";
import {Grid} from '@material-ui/core';

import {Header} from '../Header';

import './Layout.scss';
import {chats} from "../../helpers/chatsData";
import {BrowserRouter, Route, Switch} from "react-router-dom";
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

            <BrowserRouter>
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
            </BrowserRouter>

        )
    }
}