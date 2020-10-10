import React, { Component, Fragment } from 'react'
import { nanoid } from 'nanoid'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import '../../layout/css/style.css'
import { history } from '../../store'
import ChatList from '../ChatList/ChatList'
import Header from '../Header/Header'
import { ChatContainer } from '../../containers/ChatContainer'
import AlertShow from '../AlertShow/AlertShow'
class App extends Component {

    state = {
        title: 'React GB',
        
        currentActiveChat: null,
        currentActiveChatName: null,
        numSelectedChat: 1,
        error: null,
    }

    timeoutID = null

    hanldeCloseAlert = (value) => {
        this.props.handleCloseAlert(value)
    }

    handleAlert = (value, type = 'inform', isSelect = false, messageId) => {
        this.props.handleShowAlert({ value, type, isSelect, messageId })
    }

    handleNewChat = (data) => {
        this.props.handleNewChat(data)
    }

    handleNameChange = (data) => {
        this.props.handleNameChange(data)
        this.handleAlert(`Изменения сохраненны`)
    }

    handleDeleteMessage = (value) => {
        const { handleDelete } = this.props
        handleDelete({
            messageId: value.id, 
            isSelect: value.isSelect, 
            numSelectedChat: this.state.numSelectedChat
        })
    }

    handleSelectChat = (data) => {
        const chatKey = []
        for (let [key, value] of Object.entries(this.props.chats)) {
            chatKey.push(value)
            if( value.id === data) {
                this.setState({ numSelectedChat: key, currentActiveChatName: value.name })
            }
        }
    }
    
    handleCurrentChatName = (data) => {
        this.setState({ currentActiveChat: data })
        this.handleSelectChat(data)
    }

    render(){
        return(
            <ConnectedRouter history={ history }>     
                <Header 
                    title={ this.state.title } 
                    profile={ this.props.profile } 
                    chatName={ this.state.currentActiveChatName }
                    users={ this.props.users }
                    handleNewChat={ this.handleNewChat }
                    handleNameChange={ this.handleNameChange }/>
                <main>
                    <Switch>
                        <Route path='/' >
                            <Switch>
                                <Route path='/' exact render={ (props) => 
                                    <ChatContainer 
                                        { ...props }
                                        handleAlert={ this.handleAlert }
                                        popup={ this.props.popup } 
                                        hanldeCloseAlert={ this.hanldeCloseAlert }
                                        numSelectedChat={ this.state.numSelectedChat }
                                        currentActiveChat={ this.state.currentActiveChat } />}
                                />
                                <Route path='/:id' exact render={ (props) => 
                                    <ChatContainer 
                                        { ...props }
                                        handleAlert={ this.handleAlert }
                                        popup={ this.props.popup } 
                                        hanldeCloseAlert={ this.hanldeCloseAlert }
                                        numSelectedChat={ this.state.numSelectedChat }
                                        currentActiveChat={ this.state.currentActiveChat } />}
                                />
                            </Switch>
                            <ChatList 
                                chats={ this.props.chats } 
                                selectChat={ this.handleCurrentChatName } 
                                currentActiveChat={ this.state.currentActiveChat }/>
                            <AlertShow 
                                handleDeleteMessage={ this.handleDeleteMessage }
                                popup={ this.props.popup } 
                                hanldeCloseAlert={ this.hanldeCloseAlert } />
                        </Route>
                    </Switch>
                </main>
            </ConnectedRouter>
        )
    }
}
export default App 