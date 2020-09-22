import React from 'react';
import { Message } from './Message';
import PropTypes from 'prop-types';

export const MessageList = ({ items }) =>
  items.map((item, i) => (
    <Message text={item} author="WebDev" key={String(i)} />
  ));

MessageList.propTypes = {
  items: PropTypes.array,
};
