import React from "react";
import {connect} from 'react-redux';
import {Profile} from 'components/Profile';
import {profileLoadAction} from 'actions/profile';
import {Messenger} from "components/Messenger";

class ProfileContainerClass extends React.Component {
    componentDidMount() {
        const {profileLoadAction, profile} = this.props;
        if (!profile.length)
            profileLoadAction();
    }

    render() {
        const {profile, isError, isLoading} = this.props;
        return (
            <Profile profile={profile}
                     isLoading={isLoading}
                     isError={isError}/>
        );
    }
}

function mapStateToProps(state) {
    const profile = state.profile.entries;

    return {
        profile,
        isLoading: state.profile.loading,
        isError: state.profile.error,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        profileLoadAction: () => dispatch(profileLoadAction()),
    }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerClass);