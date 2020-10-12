import React, {Component} from "react";
import {connect} from 'react-redux';
import {Profile} from '../components/Profile'
import {profileLoadAction} from '../actions/profile'

export class ProfileContainerClass extends Component {

  componentDidMount() {
    const {profileLoadAction, profile} = this.props;
    if (!profile.name) {
      profileLoadAction();
    }
  }

  render() {
    const {profile} = this.props
    console.log('profile',profile)
    return (
      <Profile
        name={profile.name}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const {profile} = state
  return {
    profile,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    profileLoadAction: () => dispatch(profileLoadAction()),
  }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerClass)