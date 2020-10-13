import React, {Component} from 'react';
import classNames from 'classnames';
import {Paper, Grid, Typography, Avatar} from '@material-ui/core'

import './Message.scss';

export class Message extends Component {
  render() {
    const {text, author} = this.props;
    const classes = classNames('', {
      'message-sender': author !== 'BOT',
      'message-incoming': author === 'BOT'
    });

    return (
        <div className={classes}>
          <Paper className="message">
            <Grid container spacing={2} alignItems={"center"} wrap="nowrap">
              <Grid item>
                <Avatar>{author.slice(0,1).toUpperCase()}</Avatar>
              </Grid>
              <Grid item container direction={"column"} xs zeroMinWidth>
                <Grid item>
                  <Typography>
                    {text}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography  variant="body2" className="message-author">
                    {author}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>


    )
  }
}