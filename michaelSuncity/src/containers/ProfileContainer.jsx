import React from 'react';
import {connect} from 'react-redux';

import {Profile} from '../components/Profile';
import {profilesLoadAction} from '../actions/profiles';

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

    render(){
        const {profiles, isLoading, isError} = this.props;
        return (
            <Profile 
            profiles = {profiles}
            isLoading = {isLoading}
            isError = {isError}
            handleProfileReload = {this.handleProfileReload}
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
    };
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerClass);