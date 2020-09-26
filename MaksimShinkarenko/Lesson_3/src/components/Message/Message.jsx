import React, {Component} from 'react';
import classNames from 'classnames';
import {Paper, Grid, Avatar, Typography} from '@material-ui/core';

import './Message.scss';

export class Message extends Component {
    render() {
        const classes = classNames('message', {
            'message-bot': this.props.author === 'Bot',
            'message-sender': this.props.author !== 'Bot',
        });
        return (
            <div className={classes}>
                <Paper className="message-paper">
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar>W</Avatar>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Typography noWrap>{this.props.text}</Typography>
                            <Typography noWrap variant="body2" className="message-author">{this.props.author}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    };
};