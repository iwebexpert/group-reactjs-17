import React, {Component} from 'react';
import {TextField, FloatingActionButton} from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';


export default class MessageComponent extends Component {
    render() {
        return (
            <div className="alert alert-primary rounded m-2 pt-2 pr-2 pb-3 pl-3 font-22"
                 style={{
                     alignSelf: this.props.user === 'bot' ?
                         'flex-start' : 'flex-end'
                 }}
            > {this.props.text}
                <div className="text-info font-14"
                >{this.props.user}</div>
            </div>
        );
    }
}
