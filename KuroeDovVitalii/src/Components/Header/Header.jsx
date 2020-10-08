import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, ButtonGroup } from '@material-ui/core' 
import Profile from '../Profile/Profile'
import NewChat from '../NewChat/NewChat'
export default class Header extends Component {
    render() {
        const Title = this.props.chatName !== null ? this.props.chatName : this.props.title
        if (!this.props.profile ) {
            return <div>Loading...</div>
        }
        return(
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Profile profile={ this.props.profile } handleNameChange={ this.props.handleNameChange }/>
                    <Typography variant="h6" >
                        { Title }
                    </Typography>
                    <ButtonGroup className="button-group" variant="contained">
                        <NewChat profile={ this.props.profile } users={ this.props.users } handleNewChat={ this.props.handleNewChat }/>
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
        )
    }
}