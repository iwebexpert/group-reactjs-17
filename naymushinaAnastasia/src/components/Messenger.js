import React, {Component} from 'react';
import MessageComponent from "./MessageComponent";
import AddMessage from "./AddMessage";
import ChatList from "./ChatList";
import {routes} from "../routes";
import {chats} from '../helpers/chatsData';
import {nanoid} from 'nanoid';
import AddNewChat from "./AddNewChat";

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

    robotAnswer() {
        const {chats} = this.state;
        const currentChat = this.currentChat;

        currentChat.messages = [...this.currentChat.messages, {
            id: nanoid(),
            author: "bot",
            text: "Не приставай ко мне, я робот!"

        }];
        chats[currentChat.id] = currentChat;

        this.setState({
            chats: chats,
        });


    }


    onSubmitNewMessage() {
        const {chats} = this.state;
        const currentChat = this.currentChat;

        currentChat.messages = [
             ...this.currentChat.messages,
            {
                id: nanoid(),
                author: "me",
                text: this.state.newMessage

            }];

        chats[currentChat.id] = currentChat;


        this.setState({
            chats: chats,
            newMessage: ""
        });

        setTimeout(() => this.robotAnswer(), 1000)
    }

    addChat(chatTitle) {
        const {chats} = this.state;
        const id = chats[chats.length - 1].id + 1;
        const updatedChats = chats.concat({
            id: id,
            title: chatTitle,
            messages: [],
        });
        this.setState({
            chats: updatedChats
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
                    <ChatList chats={this.state.chats}/>
                    <AddNewChat submit={(chatTitle) => this.addChat(chatTitle)}/>
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
