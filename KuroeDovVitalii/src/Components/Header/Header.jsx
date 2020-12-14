import React from "react"
import { AppBar, Toolbar, Typography, ButtonGroup } from "@material-ui/core"
import Profile from "components/Profile/Profile"
import NewChat from "components/NewChat/NewChat"

export default function Header(props) {
    const { chatName, title, profile, users, newChat, changeName } = props

    return (
        <AppBar position="static" elevation={10}>
            <Toolbar variant="dense">
                <Profile profile={profile} handleNameChange={changeName} />
                <Typography variant="h6">
                    {chatName !== null ? `Чат с ${chatName}` : title}
                </Typography>
                <ButtonGroup className="button-group" variant="contained">
                    <NewChat
                        profile={profile}
                        users={users}
                        newChat={newChat}
                    />
                </ButtonGroup>
            </Toolbar>
        </AppBar>
    )
}
