import React , { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ListItemIcon, ListItemText, ListItem, Avatar, IconButton, Badge  } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

export default class ChatListItem extends Component {

    handleSelectChat = () => {
        this.props.handleSelectChat({ chatId: this.props.id, chatName: this.props.name })
    }

    handleChatDelete = () => {
        this.props.handleChatDelete(this.props.id)
    }

    render() {
        const DeleteButton = this.props.selected === this.props.id ?
            <IconButton
                aria-label="delete"
                className="MuiListItem-root.Mui-selected"
                size="small"
                onClick= { this.handleChatDelete }
                >
                    <DeleteIcon fontSize="inherit" />
            </IconButton> : null

        return(
            <Link className="link" to={ `/${this.props.id}` } replace>
                <ListItem button onClick={ this.handleSelectChat } selected={ this.props.selected === this.props.id }>
                    <ListItemIcon>
                        <Badge color={this.props.fire ? "secondary" : "primary"} badgeContent={this.props.messages.length} >
                            <Avatar src={ this.props.avatar }></Avatar>
                         </Badge>
                    </ListItemIcon>
                    <ListItemText primary={ this.props.name } />
                    { DeleteButton }
                </ListItem>  
            </Link>
        )
    }
}