import React from "react"
import {
    ListItemIcon,
    ListItemText,
    ListItem,
    Avatar,
    IconButton,
    ListItemSecondaryAction,
    Badge,
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import makeStyles from "./style"

export default function ChatListItem(props) {
    const { deleteChat, item, selectChat, selected, redirect } = props
    const classes = makeStyles()
    const { id, fire, messages, avatar, name } = item

    const handleSelectChat = () => {
        redirect(`/chats/${id}`)
        selectChat(id)
    }

    const handleChatDelete = () => {
        redirect("/")
        deleteChat(id)
    }

    return (
        <ListItem
            button
            onClick={handleSelectChat}
            className={classes.link}
            selected={selected === id}
            divider
            dense
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
                <ListItemSecondaryAction>
                    <IconButton
                        aria-label="delete"
                        className="MuiListItem-root.Mui-selected"
                        size="small"
                        onClick={handleChatDelete}
                    >
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                </ListItemSecondaryAction>
            ) : null}
        </ListItem>
    )
}
