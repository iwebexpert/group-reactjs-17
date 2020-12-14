import React from "react"
import Message from "components/Message/Message"
import {
    IconButton,
    TextField,
    Typography,
    Paper,
    Divider,
    Backdrop,
    CircularProgress,
} from "@material-ui/core"
import SendIcon from "@material-ui/icons/SendRounded"
import ScrollableFeed from "react-scrollable-feed"

export default function Chat(props) {
    const [state, setState] = React.useState({
        input: "",
        open: true,
    })

    const {
        match,
        chatId,
        chats,
        profile,
        selected,
        chat,
        sendMessage,
        deleteMessage,
    } = props
    const { firstName } = profile

    let messages = <Typography className="chat__text">Выберите чат</Typography>

    const handleChange = (event) => {
        setState({ ...state, input: event.target.value })
    }

    const handleClick = () => {
        if (state.input !== "") {
            sendMessage(chatId, {
                name: "me",
                text: state.input,
            })
            setState({ ...state, input: "" })
        }
    }

    const handleKeyUp = (event) => {
        if (state.input !== "") {
            if (event.keyCode === 13) {
                sendMessage(chatId, {
                    name: "me",
                    text: state.input,
                })
                setState({ ...state, input: "" })
            }
        }
    }

    React.useLayoutEffect(() => {
        if (!chat) {
            return (
                <Backdrop
                    className="backdrop"
                    open={state.open}
                    onClick={handleClose}
                >
                    <Typography display="block" variant="h2">
                        Грузим Чаты...
                    </Typography>
                    <CircularProgress color="inherit" size="10rem" />
                </Backdrop>
            )
        }
    }, [chat])

    return (
        <>
            <section className="chat">
                <Paper elevation={5}>
                    <div className="message-list">
                        <ScrollableFeed>
                            {chatId === undefined
                                ? messages
                                : chat.messages.map((item) => (
                                      <Message
                                          key={item.id}
                                          avatar={chat.avatar}
                                          chatId={chat.id}
                                          user={firstName}
                                          chatName={chat.name}
                                          masterAvatar={profile.avatar}
                                          message={item}
                                          deleteMessage={deleteMessage}
                                      />
                                  ))}
                        </ScrollableFeed>
                    </div>
                    <Paper elevation={3}>
                        <Divider />
                        <div className="chat-footer">
                            <TextField
                                disabled={chatId === undefined}
                                autoFocus
                                fullWidth
                                size="small"
                                label="введи текст"
                                variant="outlined"
                                value={state.input}
                                onChange={handleChange}
                                onKeyUp={(event) => handleKeyUp(event)}
                            />

                            <IconButton
                                disabled={chatId === undefined}
                                color="primary"
                                onClick={handleClick}
                            >
                                <SendIcon />
                            </IconButton>
                        </div>
                    </Paper>
                </Paper>
            </section>
        </>
    )

    // if (id !== undefined && chats && chatId && chats[chatId]) {
    //     messages = currentChat.map((item) => (

    //     ))
    // } else {
    //     ;<Typography>Выберите чат</Typography>
    // }
}

// class Chat extends Component {
//     constructor(props) {
//         super(props)
//         this.handleMessageSend = props.handleMessageSend.bind(this)
//     }

//     state = {
//         input: "",
//         open: true,
//     }

//     handleSendMessage = (message) => {
//         const { id } = this.props.match.params
//         this.setState(
//             { input: "" },
//             this.handleMessageSend(
//                 {
//                     name: "me",
//                     text: message,
//                     id: nanoid(4),
//                 },
//                 id,
//                 id
//             )
//         )
//     }

//

//     handleChange = (event) => {
//         this.setState({ input: event.target.value })
//     }

//     setOpen = (value) => {
//         console.log(value)
//         this.setState({ open: value })
//     }

//     handleClose = () => {
//         this.setOpen(false)
//     }

//     handleToggle = () => {
//         this.setOpen(!this.state.open)
//     }

// }

// export default Chat
