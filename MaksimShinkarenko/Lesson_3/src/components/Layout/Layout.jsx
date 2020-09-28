import React, {Component} from "react";
import {Grid} from '@material-ui/core';


import {Messenger} from "../Messenger";
import {ChatList} from '../ChatList';
import {Header} from '../Header';

import './Layout.scss';

export class Layout extends Component {
    render() {
        return (
            <Grid container direction='column' className='layout' spacing={2}>
                <Grid item>
                <Header/>
                </Grid>
                <Grid container item spacing={2} className="container-chat">
                    <Grid item xs={2}>
                        <ChatList/>
                    </Grid>
                    <Grid item xs={10}>
                        <Messenger/>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}