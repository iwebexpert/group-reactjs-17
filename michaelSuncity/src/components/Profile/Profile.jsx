import React, {Component} from 'react';
import {Paper, Grid, Avatar, Typography} from '@material-ui/core';
import {ProfileForm} from '../ProfileForm';

import './Profile.scss';

export class Profile extends Component
{
   
    render(){
        const {profiles, isLoading, isError, handleProfileReload, handleProfileUpdate} = this.props;

        if(isLoading){
            return(
                <div className="container">
                    <div className="circle circle-1"></div>
                    <div className="circle circle-2"></div>
                    <div className="circle circle-3"></div>
                    <div className="circle circle-4"></div>
                    <div className="circle circle-5"></div>
                </div>
            );
        }

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
                {isError ?
                 <div>Error...Попробуйте обновить профиль или зайти позднее
                     <div>
                        <button onClick={handleProfileReload}>Обновить</button>
                    </div>
                 </div> 
                 : profileList}
                <h1>Update profile</h1>
                <ProfileForm onSend = {handleProfileUpdate} />
            </div>
        )
    }
}