import React from 'react';
import {connect} from 'react-redux';
import {profilesLoadAction} from '../actions/profiles';

import {Profile} from "components/Profile";

class ProfileContainerClass extends React.Component {
    componentDidMount(){
        if(!this.props.profiles.length){
            this.props.profilesLoadAction();
        }
    }

    handleProfilesReload = () => {
        this.props.profilesLoadAction();
    };

    render(){
        // console.log(this.props);
        const {profiles, isLoading, isError} = this.props;

        return (
            <Profile
                profiles={profiles}
                isLoading={isLoading}
                isError={isError}
                handleProfilesReload={this. handleProfilesReload}
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