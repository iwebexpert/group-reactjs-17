import React , { Component, Fragment } from 'react'
import Header from '../Header/Header'
import Chat from '../Chat/Chat'
import ChatList from '../ChatList/ChatList'
import '../../layout/css/style.css'
import {nanoid} from 'nanoid'

class App extends Component {
    state  = {
        title: "React GB",
        chat: [],
        currentChat: 0,
        chats: [
            {id: nanoid(6), name: "Сушист", avatar: `https://i.pravatar.cc/150?img=1`},
            {id: nanoid(6), name: "Визажист", avatar: `https://i.pravatar.cc/150?img=2`},
            {id: nanoid(6), name: "Стилист", avatar: `https://i.pravatar.cc/150?img=3`},
            {id: nanoid(6), name: "Повар", avatar: `https://i.pravatar.cc/150?img=4`}
        ]

    }

    handleAddToChat = (input) => {
        this.setState({ 
            chat : [...this.state.chat, input ]
        })
    }

    render() {
        return(
            <Fragment>
                <Header title={this.state.title}/>
                <main>
                    <Chat chat={this.state.chat} addToChat={this.handleAddToChat} />
                    <ChatList chats={this.state.chats}/>
                </main>
            </Fragment>
        )
    }
}

export default App