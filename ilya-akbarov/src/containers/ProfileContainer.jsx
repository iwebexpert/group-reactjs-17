import React, {Component} from 'react'
import {connect} from 'react-redux'
import { profileLoadAction, profileUpdateAction } from '../actions/profile'
import ProfilePage from '../pages/Profile'

class ProfileContainer extends Component {

  componentDidMount() {
    this.props.profileLoadAction()
  }
  
  onSubmit = (value) => {
    this.props.profileUpdateAction({
      name: value
    })
  }
  
  render() {
    const { profile, isLoading, isError } = this.props
    return (
      <ProfilePage
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
    isError: state.profile.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    profileLoadAction: () => dispatch(profileLoadAction()),
    profileUpdateAction: (profile) => dispatch(profileUpdateAction(profile))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer)
