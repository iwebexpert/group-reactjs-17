import React, {Component} from 'react';
import {Paper, Grid, Avatar, Typography} from '@material-ui/core';
import './Profile.scss';

export class Profile extends Component
{
   
    render(){
        const {profiles} = this.props;

        const profileList = profiles.map((item) => (
            <Paper key={item.id} className="profile">
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar>{item.name.slice(0,1).toUpperCase()}</Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography noWrap>Name: {item.name} </Typography>
                        <Typography noWrap>Surname: {item.surname}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        ));

        return (
            <div>
                <h1>Profile</h1>
                {profileList}        
            </div>
        )
    }
}