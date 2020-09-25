import React, {Component} from 'react';

export class Message extends Component {
    render() {
        const {text, author} = this.props;
        return (
            <div>
                <p>{text} (<b>{author}</b>)</p>
            </div>
        );
    }
}