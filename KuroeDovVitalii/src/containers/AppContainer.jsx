import { connect } from "react-redux"
import { push } from "connected-react-router"

import App from "components/App/App"
import { chatsLoadAction, chatsMessageDeleteAction } from "actions/chats"
import {
    profileLoadAction,
    profileChangeNameAction,
    usersLoadAction,
} from "actions/profile"
import {
    alertLoadAction,
    alertCloseInformAction,
    alertSendInformAction,
} from "actions/alerts"

// class AppContainerClass extends Component {
//     componentDidMount() {
//         const {
//             chats,
//             profile,
//             users,
//             popup,
//             alertLoadAction,
//             chatsLoadAction,
//             profileLoadAction,
//             usersLoadAction,
//         } = this.props

//         if (!Object.keys(chats).length) {
//             chatsLoadAction()
//         }

//         if (!profile.length || !users.length || !popup.length) {
//             profileLoadAction()
//             usersLoadAction()
//             alertLoadAction()
//         }
//     }

//     // handleNewChat = (data) => {
//     //     const { chatsAddInformAction } = this.props
//     //     chatsAddInformAction(data)
//     //     this.handleChatRedirect(data.id)
//     // }

//     render() {
//         return (
//             <App
//                 {...this.props}
//                 handleCloseAlert={this.handleCloseAlert}
//                 handleNewChat={this.handleNewChat}
//             />
//         )
//     }
// }

const mapStateToProps = (state) => {
    const chats = state.chats.entries
    const { selected, currentChatName, loading } = state.chats
    const { popup } = state.alert
    const { profile, users } = state.profile
    const { chatId } = state

    return {
        chats,
        popup,
        profile,
        currentChatName,
        selected,
        users,
        chatId,
        loading,
    }
}

const mapDispatchToProps = {
    loadChats: chatsLoadAction,
    handleDelete: chatsMessageDeleteAction,
    loadProfile: profileLoadAction,
    loadUsers: usersLoadAction,
    handleNameChange: profileChangeNameAction,
    alertLoad: alertLoadAction,
    handleCloseAlert: alertCloseInformAction,
    handleShowAlert: alertSendInformAction,
    redirect: push,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
