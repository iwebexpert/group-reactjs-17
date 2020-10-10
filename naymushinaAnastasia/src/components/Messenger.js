import React, {Component} from 'react';
import MessageComponent from "./MessageComponent";
import AddMessage from "./AddMessage";
import ChatList from "./ChatList";
import {routes} from "../routes";
import {chats} from '../helpers/chatsData';
import {nanoid} from 'nanoid';

export default class Messenger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chats,
            newMessage: ""
        };
        this.onSubmitNewMessage = this.onSubmitNewMessage.bind(this);
        this.onChangeNewMessage = this.onChangeNewMessage.bind(this);
    }

    /*componentDidUpdate(prevProps, prevState) {
        let msgBefore = [...prevState.messages];
        let msgAfter = [...this.state.messages];

        if (msgAfter.length > 0 &&
            msgBefore.length < msgAfter.length &&
            msgAfter.pop().user !== "bot") {
            setTimeout(() =>
                    this.setState({
                        messages: [
                            ...this.state.messages,
                            {text: 'Не приставай ко мне, я робот!', user: 'bot'}
                        ]
                    }),
                500);

        }

    }*/


    onSubmitNewMessage() {
        const {chats} = this.state;
        const currentChat = this.currentChat;

        currentChat.messages = [{
            id: nanoid(),
            author: "me",
            text: this.state.newMessage

        }, ...this.currentChat.messages];

        chats[currentChat.id]= currentChat;


        this.setState({
            chats: chats,
            newMessage: ""
        });
    }

    onChangeNewMessage(newMessage) {
        this.setState({
            newMessage: newMessage
        })
    }

    get currentChat() {
        const {chats} = this.state;
        const {match} = this.props;
        let currentChat = null;
        if (match && chats[match.params.id]) {
            currentChat = chats[match.params.id]
        }
        return currentChat;
    }

    get messages() {
        let messages = null;

        if (this.currentChat) {
            messages = this.currentChat.messages;
        }
        return messages;
    }


    render() {
        const messages = this.messages;
        return (
            <div className="d-flex w-100 justify-content-between h-100">
                <div className="w-25 border bg-light">
                    <ChatList chats={chats}/>
                </div>
                <div className="w-75 border">

                    {<div className="h-100">

                        <div className="d-flex flex-column h-90">
                            <div className="d-flex flex-column bg-light p-2 h-100"
                                 style={{overflowY: 'scroll'}}>
                                {this.props.match.params.id ?
                                    messages.length > 0 ?
                                        messages.map((message) => {
                                            return <MessageComponent text={message.text} key={message.text}
                                                                     user={message.user}/>
                                        })
                                        : 'Сообщений нет'
                                    : "Выберите чат"
                                }
                            </div>
                        </div>
                        <AddMessage
                            newMessage={this.state.newMessage}
                            onChange={this.onChangeNewMessage}
                            onSubmit={this.onSubmitNewMessage}
                        />
                    </div>}
                </div>
            </div>

        );
    }
};
