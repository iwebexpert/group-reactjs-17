import Header from "./Header";
import ChatList from "./ChatList";
import Messenger from "./Messenger";
import React, {Component} from 'react';
import {
    Switch,
    Route
} from "react-router-dom";

export default class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chats: [
                {id: 1, title: 'Чат 1', messageList: [1]},
                {id: 2, title: 'Чат 2', messageList: [2]},
                {id: 3, title: 'Чат 3', messageList: []},
            ],
        }
    }

    render() {
        return (

            <div className="h-90">

            </div>
        )
    }
}
