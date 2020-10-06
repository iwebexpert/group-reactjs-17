import React, {Component} from 'react';
import {Paper, Grid, Avatar, Typography} from '@material-ui/core';
import './Profile.css';
import {profile} from "../../helpers/profilesData";

export class Profile extends Component {
    state = {
        profile,
    };

    render() {

        const {profile} = this.state;

        const ProfileList = profile.map((item) => (
            <Paper key={item.id} className="message-paper">
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar />
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography noWrap>{item.title} </Typography>
                        <Typography noWrap>Логин: {item.name} </Typography>
                        <Typography noWrap>E-mail: {item.email}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        ));
        return (<div>
            {ProfileList}
        </div>)
    }
}
