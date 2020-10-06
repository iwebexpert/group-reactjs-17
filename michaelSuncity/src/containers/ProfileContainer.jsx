import React from 'react';
import {connect} from 'react-redux';

import {Profile} from '../components/Profile';
import {profilesLoadAction} from '../actions/profiles';

class ProfileContainerClass extends React.Component {
    componentDidMount(){
        this.props.profilesLoadAction();
    }

    render(){
        const {profiles} = this.props;
        return (
            <Profile profiles={profiles} />
        );
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