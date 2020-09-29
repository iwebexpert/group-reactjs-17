import React, {Component} from 'react';

import {Message} from '../Message';

export class MessageList extends Component
{


    render() {
        return this.props.items.map((item) => <Message {...item} key={item.id} />);
    };
}