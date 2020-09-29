import React, {Component} from 'react';
import {ChatList} from '../ChatList';
import {Header} from '../Header';
import {Messenger} from '../Messenger';
import {Grid} from '@material-ui/core';

export class Layout extends Component
{
    render()
    {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <Header/>
                </Grid>

                <Grid item xs={3} className="chatlist">
                    <ChatList/>
                </Grid>

                <Grid item xs={9} className="messenger">
                    <Messenger/>
                </Grid>
            </Grid>
            );
    }
}