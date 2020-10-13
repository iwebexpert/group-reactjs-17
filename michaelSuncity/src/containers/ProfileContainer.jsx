import React from 'react';
import {connect} from 'react-redux';

import {Profile} from '../components/Profile';
import {profilesLoadAction, profilesUpdateAction} from '../actions/profiles';

class ProfileContainerClass extends React.Component {
    componentDidMount(){
        const {profilesLoadAction, profiles} = this.props;
        if(!profiles.length){
            profilesLoadAction();
        }
    }

    handleProfileReload = () => {
        this.props.profilesLoadAction();
    }

    handleProfileUpdate = (profile) => {
        this.props.profilesUpdateAction(profile);
    }

    render(){
        const {profiles, isLoading, isError} = this.props;
        return (
            <Profile 
            profiles = {profiles}
            isLoading = {isLoading}
            isError = {isError}
            handleProfileReload = {this.handleProfileReload}
            handleProfileUpdate = {this.handleProfileUpdate}
             />
        );
    }
}

function mapStateToProps(state, ownProps){   
    
    const profiles = state.profiles.entries;

    return {
        profiles,
        isLoading: state.profiles.loading,
        isError: state.profiles.error,
    };
}

function mapDispatchToProps(dispatch){
    return {
        profilesLoadAction: () => dispatch(profilesLoadAction()),
        profilesUpdateAction: (profile) => dispatch(profilesUpdateAction(profile)),
    };
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerClass);