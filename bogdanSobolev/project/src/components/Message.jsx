import React, {Component} from 'react';

export class Message extends Component {
    constructor(props){
        super(props);
    };

    render(){
        return (
            <div>
                <p>{this.props.text} <b>({this.props.author})</b></p>
            </div>
        );
    };
}