import React from 'react';
import {connect} from 'react-redux';
import {profileLoadAction, profileUpdateAction} from '../actions/profile';
import Profile from '../pages/Profile';

class ProfileContainerClass extends React.Component {
  componentDidMount() {
    if(this.props.profile) {
      this.props.profileLoadAction();
    }
  }

  onSubmit = (value) => {
    this.props.profileUpdateAction({
      name: value,
    })
  }

  render() {
    const { profile, isLoading, isError } = this.props
    return (
      <Profile
        profile={profile}
        onSubmit={this.onSubmit}
        isLoading={isLoading}
        isError={isError}
      />
    )
  }

}

function mapStateToProps(state) {
  return {
    profile: state.profile.entries,
    isLoading: state.profile.loading,
    isError: state.profile.error,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    profileLoadAction: () => dispatch(profileLoadAction()),
    profileUpdateAction: (profile) => dispatch(profileUpdateAction(profile))
  }
}
export const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainerClass)
