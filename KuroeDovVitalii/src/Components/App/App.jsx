import React , { Component, Fragment } from 'react'
import Header from '../Header/Header'
import Chat from '../Chat/Chat'
import ChatList from '../ChatList/ChatList'
import '../../layout/css/style.css'

class App extends Component {
    state  = {
        title: "React GB",
        chat: [],
        currentChat: 0
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
                    <ChatList />
                </main>
            </Fragment>
        )
    }
}

export default App