import React, {Component} from 'react';
import {Message} from "../Message";

import './MessagesList.scss';

export class MessagesList extends Component {
    render() {
        const {items} = this.props;

        return (
            <div className="messages-list">
                {items.map((item, index) => <Message {...item} key={index}/>)}
            </div>
        );
    }
}