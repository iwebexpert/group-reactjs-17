import React, {Component} from 'react';
import {Grid} from "@material-ui/core";

export class Profile extends Component {
    render() {
        const {profile, isLoading, isError} = this.props
        return (<Grid item className='profile'>
            {isLoading ? "Загрузка..." : ("Имя: " + profile.name)}
        </Grid>)
    }
}