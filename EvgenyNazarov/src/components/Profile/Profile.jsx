import React, {Component} from 'react';
import {Paper, Grid, Avatar, Typography} from '@material-ui/core';

import './Profile.css';

export class Profile extends Component {
    render() {
        return (<div>
            <Paper className="message-paper">
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar />
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography noWrap>Логин: </Typography>
                        <Typography noWrap>E-mail: </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>)
    }
}
