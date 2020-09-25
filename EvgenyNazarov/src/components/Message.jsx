import React, {Component} from 'react';

export class Message extends Component {
    constructor(props){
        super(props);
    };

    render(){
        return (
            <div>
                <p><i>{this.props.text}</i> <b>({this.props.author})</b></p>
            </div>
        );
    };
}