import React from "react"
import { List, Typography, Paper, Box } from "@material-ui/core"
import ChatListItem from "components/ChatListItem/ChatListItem"
import ScrollableFeed from "react-scrollable-feed"

export default function ChatList(props) {
    const { chats, selected, selectChat, deleteChat } = props

    return (
        <aside className="chat-list">
            <Paper elevation={5}>
                <List
                    dense
                    subheader={
                        <Paper elevation={5}>
                            <Typography
                                align="center"
                                paragraph={true}
                                className="chatList-header__text"
                            >
                                Список чатов
                            </Typography>
                        </Paper>
                    }
                >
                    <Box className="chatList">
                        <ScrollableFeed>
                            {chats.map((chatItem) => (
                                <ChatListItem
                                    key={chatItem.id}
                                    item={chatItem}
                                    deleteChat={deleteChat}
                                    selectChat={selectChat}
                                    selected={selected}
                                />
                            ))}
                        </ScrollableFeed>
                    </Box>
                </List>
            </Paper>
        </aside>
    )
}
