import React, {Component} from 'react';
import {MessageList} from "./MessageList";
import {MessageForm} from "./MessageForm";

export class Messenger extends Component {
    state = {
        messages: [
            {text: 'Hi', author: 'WebDev'},
            {text: 'Hello', author: 'WebDev'},
            {text: 'Test message', author: 'WebDev'},
        ]
    };
    botAnswer = 0;


    handleMessageSend = (message) => {
        this.setState({
            messages: this.state.messages.concat([{text: message.text, author: message.author}])
        });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.botAnswer = setTimeout(() => {
            this.setState({
                messages: this.state.messages.concat([{text: 'Привет!', author: 'Бот'}])
            });
            clearTimeout(this.botAnswer);
        }, 1000);
    }

    render() {
        const {messages} = this.state;
        return (
            <>
                <h3>Messenger</h3>
                <MessageList items={messages}/>
                <MessageForm onSend={this.handleMessageSend}/>
            </>
        )
    }
}