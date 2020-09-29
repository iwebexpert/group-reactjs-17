import React, {Component} from 'react';
import classNames from 'classnames';
import {Paper, Grid, Avatar, Typography} from '@material-ui/core';

import './Message.scss';

export class Message extends Component {
    render() {
        const {text, author} = this.props;
        const classes = classNames('message', {
            'message-bot': author === 'Бот',
            'message-sender': author !== 'Бот',
        });
        return (
            <div className={classes}>
                <Paper className="message-paper">
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar>{author[0].toUpperCase()}</Avatar>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Typography noWrap>{text}</Typography>
                            <Typography noWrap variant="body2" className="message-author">{author}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}