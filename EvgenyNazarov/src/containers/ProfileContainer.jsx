import React from 'react';
import {connect} from 'react-redux';
import {profilesLoadAction} from '../actions/profiles';

import {Avatar, Grid, Paper, Typography} from "@material-ui/core";

class ProfileContainerClass extends React.Component {
    componentDidMount(){
        this.props.profilesLoadAction();
    }

    render() {
        const {profiles} = this.props;
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

function mapStateToProps(state, ownProps){
    const profiles = state.profiles.entries;
    return {
        profiles,
    };
}

function mapDispatchToProps(dispatch){
    return {
        profilesLoadAction: () => dispatch(profilesLoadAction()),
    };
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerClass);