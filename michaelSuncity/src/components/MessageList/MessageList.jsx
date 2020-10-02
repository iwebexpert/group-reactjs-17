import React, { Component } from 'react';

import {Message} from '../Message';

export class MessageList extends Component
{
    render()
    {
        return this.props.items.map((item) => <Message text = {item.text} author = {item.author} key = {item.id}/>);
    }
}