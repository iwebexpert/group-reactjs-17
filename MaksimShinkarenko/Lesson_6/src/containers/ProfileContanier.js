import React from "react";
import {connect} from 'react-redux';
import {Profile} from 'components/Profile';
import {profileLoadAction} from 'actions/profile';

class ProfileContainerClass extends React.Component {
    componentDidMount() {
        const {profileLoadAction} = this.props;
        profileLoadAction();
    }

    render() {
        const {profile} = this.props;
        return (
            <Profile profile={profile}/>
        );
    }
}

function mapStateToProps(state) {
    const profile = state.profile.entries;

    return {
        profile
    };
}

function mapDispatchToProps(dispatch) {
    return {
        profileLoadAction: () => dispatch(profileLoadAction()),
    }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerClass);