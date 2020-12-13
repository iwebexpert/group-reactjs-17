import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"
import {
    ListItemIcon,
    ListItemText,
    ListItem,
    Avatar,
    IconButton,
    Badge,
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"

export default function ChatListItem(props) {
    const { deleteChat, item, selectChat, selected } = props

    const { id, fire, messages, avatar, name } = item

    const handleSelectChat = () => {
        selectChat(id)
    }

    const handleChatDelete = () => {
        deleteChat(id)
    }

    return (
        <Link className="link" to={`/chats/${id}`} replace>
            <ListItem
                button
                onClick={handleSelectChat}
                selected={selected === id}
            >
                <ListItemIcon>
                    <Badge
                        color={fire ? "secondary" : "primary"}
                        badgeContent={messages.length}
                    >
                        <Avatar src={avatar}></Avatar>
                    </Badge>
                </ListItemIcon>
                <ListItemText primary={name} />
                {selected === id ? (
                    <IconButton
                        aria-label="delete"
                        className="MuiListItem-root.Mui-selected"
                        size="small"
                        onClick={handleChatDelete}
                    >
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                ) : null}
            </ListItem>
        </Link>
    )
}
