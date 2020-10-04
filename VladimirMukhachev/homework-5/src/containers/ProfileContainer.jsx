import React from 'react';
import {connect} from 'react-redux';
import {nanoid} from 'nanoid';

import {profileLoadAction} from '../actions/profile';

class ProfileContainerClass extends React.Component {
    componentDidMount(){
        this.props.profileLoadAction();
    }

    render(){
        // console.log(this.props);
        const {profile} = this.props;
        return (
            <div>
                <h1>Your Profile</h1>
                <p>Name: {profile.name}</p>
                <p>Email: {profile.email}</p>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    // console.log('ProfileContainer mapStateToProps():');
    // console.log(state, ownProps);

    const profile = state.profile.entries;

    return {
         profile,
    };
}

function mapDispatchToProps(dispatch){
    return {
        profileLoadAction: () => dispatch(profileLoadAction()),
    };
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerClass);