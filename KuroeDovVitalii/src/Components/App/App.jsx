import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import '../../layout/css/style.css'
import AlertShow from 'components/AlertShow/AlertShow'
import Header from 'components/Header/Header'
import { ChatContainer } from 'containers/ChatContainer'
import { ChatListContainer } from 'containers/ChatListContainer'

class App extends Component {

    state = {
        title: 'React GB',
        currentActiveChat: null,
        currentActiveChatName: null,
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
            id: this.props.selected
        })
    }

    render(){
        return(
            <Fragment>
                <Header 
                    title={ this.state.title } 
                    profile={ this.props.profile } 
                    chatName={ this.props.currentChatName }
                    users={ this.props.users }
                    handleNewChat={ this.handleNewChat }
                    handleNameChange={ this.handleNameChange }/>
                <main>
                    <Switch>
                        <Route path='/' exact render={ (props) => 
                            <ChatContainer 
                                { ...props }
                                handleAlert={ this.handleAlert }
                                hanldeCloseAlert={ this.hanldeCloseAlert } />}
                        />
                        <Route path='/:id' exact render={ (props) => 
                            <ChatContainer 
                                { ...props }
                                handleAlert={ this.handleAlert }
                                hanldeCloseAlert={ this.hanldeCloseAlert } />}
                        />
                    </Switch>
                    <ChatListContainer />
                    <AlertShow 
                        handleDeleteMessage={ this.handleDeleteMessage }
                        popup={ this.props.popup } 
                        hanldeCloseAlert={ this.hanldeCloseAlert } />
                </main>
            </Fragment>
        )
    }
}
export default App 