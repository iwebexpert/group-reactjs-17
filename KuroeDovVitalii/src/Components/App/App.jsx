import React, { Component, Fragment } from 'react'
import { nanoid } from 'nanoid'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '../../layout/css/style.css'
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
        popup: {text: '', status: false},
        users: {
            1: { name: 'Михаил', avatar: `https://i.pravatar.cc/150?img=${nanoid(4)}`, id: nanoid(4) },
            2: { name: 'Игорь', avatar: `https://i.pravatar.cc/150?img=${nanoid(4)}`, id: nanoid(4) },
            3: { name: 'Света', avatar: `https://i.pravatar.cc/150?img=${nanoid(4)}`, id: nanoid(4) },
            4: { name: 'Наташа', avatar: `https://i.pravatar.cc/150?img=${nanoid(4)}`, id: nanoid(4) },
            5: { name: 'Олег', avatar: `https://i.pravatar.cc/150?img=${nanoid(4)}`, id: nanoid(4) },
            6: { name: 'Антон', avatar: `https://i.pravatar.cc/150?img=${nanoid(4)}`, id: nanoid(4) },
            7: { name: 'Катя', avatar: `https://i.pravatar.cc/150?img=${nanoid(4)}`, id: nanoid(4) },
            8: { name: 'Маша', avatar: `https://i.pravatar.cc/150?img=${nanoid(4)}`, id: nanoid(4) },
            9: { name: 'Петя', avatar: `https://i.pravatar.cc/150?img=${nanoid(4)}`, id: nanoid(4) },
            10: { name: 'Равиль', avatar: `https://i.pravatar.cc/150?img=${nanoid(4)}`, id: nanoid(4) },
            11: { name: 'Татьяна', avatar: `https://i.pravatar.cc/150?img=${nanoid(4)}`, id: nanoid(4) },
            12: { name: 'Настя', avatar: `https://i.pravatar.cc/150?img=${nanoid(4)}`, id: nanoid(4) },
            13: { name: 'Ира', avatar: `https://i.pravatar.cc/150?img=${nanoid(4)}`, id: nanoid(4) },
            14: { name: 'Алла', avatar: `https://i.pravatar.cc/150?img=${nanoid(4)}`, id: nanoid(4) },
            15: { name: 'Анна', avatar: `https://i.pravatar.cc/150?img=${nanoid(4)}`, id: nanoid(4) },
            16: { name: 'Боря', avatar: `https://i.pravatar.cc/150?img=${nanoid(4)}`, id: nanoid(4) },
        }
    }
    timeoutID = null

    hanldeCloseAlert = (value) => {
        this.setState({
            popup: {
                text: '',
                status: value
            }
        })
    }
  
    handleAlert = (value, type = 'inform', id = nanoid(4)) => {
        let alertType = type
        let status = true

        switch (type) {
            case 'message alert':
                alertType = type
                status = id.status
                break;
        
            default: 'inform'
                alertType = type
                break;
        }

        this.setState({
            popup: {
                text: value,
                status: status,
                type: alertType,
                id: id.id,
                isSelect: id.isSelect,
            }
        }, () => alertType === 'inform' ? setTimeout( () => this.hanldeCloseAlert(false), 4000 ) : null )// закрытие по таймеру
    }

    handleNewChat = (data) => {
        const chatsContainer = []
        for (let [key, value] of Object.entries(this.state.chats)) {
            chatsContainer.push(value)
        }
        const idNewChat = chatsContainer.find(item => item.id === data.id)
        if(!idNewChat) {
            this.setState({
                chats: {
                    ...this.state.chats, 
                    [chatsContainer.length+1] : {
                        name: data.name,
                        id: data.id,
                        avatar: data.avatar,
                        messages: []
                    }
                },
            }, this.handleAlert(`добавлен новый чат с "${data.name}"`))
        } else {
            this.setState({ error: 'Такой чат уже существует' })
        }
    }

    handleNameChange = (data) => {
        this.setState({
            user: { ...this.state.user, firstName: data.firstName, lastName: data.lastName }
        }, this.handleAlert(`Изменения сохраненны`))
    }

    handleDeleteMessage = (value) => {
        this.props.handleDelete({
            messageId: value.id, 
            isSelect: value.isSelect, 
            numSelectedChat: this.state.numSelectedChat
        })
        this.setState({
            popup: {
                ...this.state.popup,
                isSelect: value.isSelect,
                status: value.isSelect
            }
        }, () => this.handleAlert(`Сообщение удалено`, 'inform'))
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
            <BrowserRouter>     
                <Header 
                    title={ this.state.title } 
                    profile={ this.props.profile } 
                    chatName={ this.state.currentActiveChatName }
                    users={ this.state.users }
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
                                        handleDeleteMessage={ this.handleDeleteMessage }
                                        popup={ this.state.popup } 
                                        hanldeCloseAlert={ this.hanldeCloseAlert }
                                        numSelectedChat={ this.state.numSelectedChat }
                                        currentActiveChat={ this.state.currentActiveChat } />}
                                />
                                <Route path='/:id' exact render={ (props) => 
                                    <ChatContainer 
                                        { ...props }
                                        handleAlert={ this.handleAlert }
                                        handleDeleteMessage={ this.handleDeleteMessage }
                                        popup={ this.state.popup } 
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
                                popup={ this.state.popup } 
                                hanldeCloseAlert={ this.hanldeCloseAlert } />
                        </Route>
                    </Switch>
                </main>
            </BrowserRouter>
        )
    }
}
export default App 