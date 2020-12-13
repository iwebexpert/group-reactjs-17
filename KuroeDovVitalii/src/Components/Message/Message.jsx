import React from "react"
import PropTypes from "prop-types"
import { Chip, Avatar, Typography, IconButton } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import classNames from "classnames"

export default function Message(props) {
    const { message, chatId, user, avatar, masterAvatar, deleteMessage } = props
    const classes = classNames("message", {
        me__message: message.name === "me",
        bot__message: message.name !== "me",
    })
    const [isSelectMessage, setIsSelectMessage] = React.useState(false)

    const handleDelete = () => {
        deleteMessage(chatId, message.id)
    }

    return (
        <div className="message-block">
            <Chip
                deleteIcon={<DeleteIcon />}
                color={message.name === "me" ? "primary" : "secondary"}
                className={classes}
                clicable="true"
                onDelete={handleDelete}
                label={
                    <Typography variant="caption" className="chip-label">
                        {message.name === "me" ? user : message.name}:
                        {message.text}
                    </Typography>
                }
                avatar={
                    <Avatar src={message.name === "me" ? masterAvatar : avatar}>
                        {message.name}
                    </Avatar>
                }
            />
        </div>
    )
}
