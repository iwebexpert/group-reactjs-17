import React, {Component} from 'react';

import {MessageList} from './MessageList';
import {MessageForm} from './MessageForm';

export class Messenger extends Component {
    state = {
        messages: [
            {
                author: 'God',
                text: 'Let there be light!'
            },
            {
                author:'Galileo',
                text: 'Eppur si muove!'
            },
            {
                author: 'Che Guevara',
                text: 'No pasaran!'
            },
        ],
    };

    handleMessageSend = (message) => {
        this.setState({
            messages: this.state.messages.concat(message)
        });
    };

    botSayHello = (author) => {
        this.setState({
            messages: this.state.messages.concat({
                author: 'Bot',
                text: 'Привет '+author
            })
        });
    };

    componentDidUpdate(){
        let lastMessage = this.state.messages[this.state.messages.length-1];
        if(lastMessage.text == 'Привет Бот' || lastMessage.text == 'Привет, Бот'){
            setTimeout(this.botSayHello, 1000, lastMessage.author
            );
        }
    }

    render(){
        const {messages} = this.state;

        return (
            <>
                <MessageList items={messages} />
                <MessageForm onSend={this.handleMessageSend} />
            </>
        );
    };
}