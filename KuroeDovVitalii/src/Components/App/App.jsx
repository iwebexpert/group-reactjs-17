import React from "react"
import { Switch, Route } from "react-router-dom"
import "../../layout/css/style.css"
import AlertShow from "components/AlertShow/AlertShow"
import HeaderContainer from "containers/HeaderContainer"
import ChatContainer from "containers/ChatContainer"
import ChatListContainer from "containers/ChatListContainer"

export default function App(props) {
    const [state, setState] = React.useState({
        currentActiveChat: null,
        currentActiveChatName: null,
        error: null,
    })

    const {
        chats, //массив чатов
        loadChats, // загрузка чатов
        loadProfile, //загрузка профиля
        profile, //профиль
        currentChatName,
        users, //массив пользователей
        loadUsers, //загрузка пользователей
        handleAlert,
        hanldeCloseAlert,
        handleDeleteMessage,
        popup,
    } = props

    React.useLayoutEffect(() => {
        if (chats.length <= 0) {
            loadChats()
        }
    }, [chats])

    React.useLayoutEffect(() => {
        if (Object.keys(profile).length === 0) {
            loadProfile()
        }
    }, [profile])

    React.useLayoutEffect(() => {
        if (users.length === 0) {
            loadUsers()
        }
    }, [users])

    return (
        <>
            <HeaderContainer chatName={currentChatName} />
            <main>
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={(props) => (
                            <ChatContainer
                                {...props}
                                handleAlert={handleAlert}
                                hanldeCloseAlert={hanldeCloseAlert}
                            />
                        )}
                    />
                    <Route
                        path="/chats/:id"
                        exact
                        render={(props) => (
                            <ChatContainer
                                {...props}
                                handleAlert={handleAlert}
                                hanldeCloseAlert={hanldeCloseAlert}
                            />
                        )}
                    />
                </Switch>
                <ChatListContainer />
                <AlertShow
                    handleDeleteMessage={handleDeleteMessage}
                    popup={popup}
                    hanldeCloseAlert={hanldeCloseAlert}
                />
            </main>
        </>
    )
}
