import React from "react";
import {connect} from "react-redux";

import {Profile} from '../components/Profile/Profile';
import {profileLoadAction, profileUpdateAction} from "../actions/profileAction";

class ProfileContainerClass extends React.Component {
    componentDidMount() {
        if (!this.props.profile.profile) {
            this.props.profileLoadAction();
        }
    }

    handleUpdateProfile = (profile) => {
        this.props.profileUpdateAction(profile);
    };

    handleProfileReload = () => {
        this.props.profileLoadAction();
    }

    render() {
        const {profile, isLoading, isError} = this.props;
        return (
            <Profile
                profile={profile}
                handleUpdateProfile={this.handleUpdateProfile}
                isLoading={isLoading}
                isError={isError}
                handleProfileReload={this.handleProfileReload}
            />
        );
    }
}

function mapStateToProps(state) {
    const {profile} = state;
    return {
        profile: profile.data,
        isLoading: profile.loading,
        isError: profile.error,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        profileLoadAction: () => dispatch(profileLoadAction()),
        profileUpdateAction: (profile) => dispatch(profileUpdateAction(profile)),
    };
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerClass);