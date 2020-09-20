import React , { Component, Fragment } from 'react'
import Header from './../Header/Header'
import Chat from './../Chat/Chat'
import '../../layout/css/style.css'

class App extends Component {

    state  = {
        title: "React GB",
        chat: []
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
                </main>
            </Fragment>
        )
    }
}


export default App