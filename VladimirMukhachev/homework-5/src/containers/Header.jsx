import React from 'react';
import {connect} from 'react-redux';
import {profileLoadAction} from '../actions/profile';

import {AppBar, Toolbar, Typography, Link} from '@material-ui/core';


class HeaderContainerClass extends React.Component {
  componentDidMount(){
      this.props.profileLoadAction();
  }

  render(){
      const {profile} = this.props;
      return (
          <AppBar position="relative">
            <Toolbar variant="dense" className="toolbar">
              <Typography variant="h6" noWrap>
                <Link variant="button" color="inherit" href="/">Главная</Link>
              </Typography>
              <Typography variant="h6" color="inherit" noWrap>&nbsp;|&nbsp;</Typography>
              <Typography variant="h6" noWrap>
                <Link variant="button" color="inherit" href="/about">О нас</Link>
              </Typography>
              <Typography variant="h6" color="inherit" noWrap>&nbsp;|&nbsp;</Typography>
              <Typography variant="h6" noWrap>
                <Link variant="button" color="inherit" href="/profile">Ваш Профиль ({profile.name})</Link>
              </Typography>
            </Toolbar>
          </AppBar>
      );
  }
}

function mapStateToProps(state, ownProps){
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

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerClass);