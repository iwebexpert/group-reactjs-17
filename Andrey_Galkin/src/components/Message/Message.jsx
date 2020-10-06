import React, {Component} from 'react';
import classNames from 'classnames';
import {Paper, Grid, Avatar, Typography} from '@material-ui/core';

import './Message.scss';

export class Message extends Component {
  render() {
    const {text, author} = this.props;

    const classes = classNames('message', {
      'message-bot': author === 'Bot',
      'message-sender': author !== 'Bot',
    });

    return (
      <div className={classes}>
        <Paper className="message-paper">
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap variant="body2" className="message-author">{author}:</Typography>
              <Typography noWrap>{text}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}