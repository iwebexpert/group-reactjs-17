import React, {Component} from 'react';
import {Grid} from "@material-ui/core";



export class Profile extends Component {
    render() {
        const {profile} = this.props
        return (<Grid item className='profile'>
            Имя: {profile.name}
        </Grid>)
    }
}