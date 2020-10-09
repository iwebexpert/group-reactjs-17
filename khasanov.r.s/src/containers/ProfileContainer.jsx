import React from "react";
import {connect} from "react-redux";

import {Profile} from '../components/Profile/Profile';
import {profileLoadAction, profileUpdateAction} from "../actions/profileAction";

class ProfileContainerClass extends React.Component {
    componentDidMount() {
        this.props.profileLoadAction();
    }

    handleUpdateProfile = (profile) => {
        this.props.profileUpdateAction(profile);
    };

    render() {
        console.log('test', this.props);
        const {profile} = this.props;
        return (
            <Profile profile={profile} handleUpdateProfile={this.handleUpdateProfile}/>
        );
    }
}

function mapStateToProps(state) {
    const {profile} = state;
    return {
        profile: profile.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        profileLoadAction: () => dispatch(profileLoadAction()),
        profileUpdateAction: () => dispatch(profileUpdateAction()),
    };
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerClass);