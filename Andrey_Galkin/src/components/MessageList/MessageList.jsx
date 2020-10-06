import React, {Component} from 'react';
import {Message} from '../Message';

import './MessageList.scss';

export class MessageList extends Component {
  render() {
    const {items} = this.props;

    return items.map((item) => <Message text={item.text} author={item.author} key={item.id} />);
  }
}