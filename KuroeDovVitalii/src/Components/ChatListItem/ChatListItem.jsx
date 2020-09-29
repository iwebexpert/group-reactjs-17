import React , { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ListItemIcon, ListItemText, ListItem, Avatar  } from '@material-ui/core'

export default class ChatListItem extends Component {

    // handleSelectChat = () => {
    //     this.props.selectChat(this.props.id)
    // }

    render() {
        return(
            // <Link className="link" to={`/${this.props.id}`} replace>
                <ListItem button >
                    <ListItemIcon>
                        <Avatar src={this.props.data.avatar}></Avatar>
                    </ListItemIcon>
                    <ListItemText primary={this.props.data.name} />
                </ListItem>  
            // </Link>
            
        )
    }
}