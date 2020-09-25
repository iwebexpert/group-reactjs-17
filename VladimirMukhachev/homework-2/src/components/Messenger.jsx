import React, {Component} from 'react';

import {MessageList} from './MessageList';
import {MessageForm} from './MessageForm';

export class Messenger extends Component
{
    state = {
        messages: [
            { author: 'Bot', text: 'Привет!', needBotReply: false},
            { author: 'Bot', text: 'Что закажите на ужин? :-)', needBotReply: false},
        ],
    };

    botRandomAnswers = [
        'Точно?',
        'В какое время сделаем доставку?',
        'Ой, сегодня это не сможем. Выберем другое?',
        'Карта или наличные?',
        'Холодное или разогреть?',
        'Салфетки понадобятся?',
    ]

    getBotRandomAnswer = () => {
        return this.botRandomAnswers[Math.floor(Math.random() * this.botRandomAnswers.length)];
    };

    handleBotReaction = (toUser) => {
        this.setState({messages: this.state.messages.concat([{author: 'Bot', text: toUser + ', ' + this.getBotRandomAnswer(), needBotReply: false}])});
    };

    handleMessageSend = (message) => {
        this.setState({messages: this.state.messages.concat([{author: message.author, text: message.text, needBotReply: true}])});
    };

    componentDidUpdate(prevProps, prevState){
        //const lastMessage = prevState.messages[prevState.messages.length - 1];
        const lastMessage = this.state.messages[this.state.messages.length - 1];
        if (lastMessage.needBotReply) setTimeout(() => this.handleBotReaction(lastMessage.author), 1000);
    };

    render()
    {
        const {messages} = this.state;

        return (
            <>
               <MessageList items={messages} />
               <MessageForm onSend={this.handleMessageSend} />
            </>
            );
    };
} 