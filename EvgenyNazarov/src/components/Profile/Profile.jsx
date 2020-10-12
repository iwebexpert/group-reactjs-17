import React, {Component} from 'react';
import {Paper, Grid, Avatar, Typography} from '@material-ui/core';
import './Profile.css';


export class Profile extends Component {

    render() {

        const {profiles, isLoading, isError, handleProfilesReload} = this.props;

        if(isLoading){
            return (<div>Loading...</div>);
        }

        if(isError){
            return (<div>Error... Попробуйте получить чаты позднее. <button onClick={handleProfilesReload}>Обновить чаты</button></div>);
        }

        const ProfileList = profiles.map((item) => (
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
