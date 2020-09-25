import React, {Component} from 'react';

import {MessageList} from './MessageList';
import {MessageForm} from './MessageForm';

export class Messenger extends Component
{
    state = {
        //теперь сообщения формата "Автор + текст сообщения"
        messages: [
            {author: 'Author1', text: 'Text1'},
            {author: 'Author2', text: 'Text2'},
            {author: 'Author3', text: 'Text3'},
        ],
    };

    handleMessageSend = (message) => {
        //Расширим, чтобы выводился автор сообщения
        this.setState({messages: this.state.messages.concat([{author: message.author, text: message.text}])});
    }
    
    //Автоответчик
    autoAnswer = (lastMessage) => {
        this.setState({messages: this.state.messages.concat([{author: 'Bot', text: 'Текст Автоответчика'}])});
    };

    componentDidUpdate(){
        //чтобы бот не отправлял сообщения себе, надо понять, что автор последнего сообщения не бот
        const lastMessage = this.state.messages[this.state.messages.length - 1].author;
        if (lastMessage !== 'Bot')
            setTimeout(this.autoAnswer(lastMessage), 1000);
    }

    render()
    {
        const {messages} = this.state;
        console.log(messages);
        return (
            <>
               <MessageList items={messages} />
               <MessageForm onSend={this.handleMessageSend} />
            </>
        );
    }
}