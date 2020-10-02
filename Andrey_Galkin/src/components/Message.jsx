import React, {Component} from 'react';

export class Message extends Component {
  render() {
    const {text, author} = this.props;

    return (
      <div>
        <p><b>{author}:</b> {text} </p>
      </div>
    );
  }
}