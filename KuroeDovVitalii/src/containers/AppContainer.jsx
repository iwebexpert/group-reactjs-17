import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import App from '../Components/App/App'
import { chatsLoadAction, } from '../actions/chats'
import { nanoid } from 'nanoid'

class AppContainerClass extends Component {

    componentDidMount() {
        const { chats,  } = this.props
        if (!chats.length ) {
            this.props.chatsLoadAction()
        }
    }


    render() {
        console.log(this.props, 'appcontainer props')
        const { chats, messages } = this.props
       
        return (
            <>
                <App { ...this.props } />
            </>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        chatsLoadAction: () => dispatch(chatsLoadAction()),
    }
}

const mapStateToProps = (state, ownProps) => {
    const chats = state.chats.entries
    const { match } = ownProps

    let messages = null

    if(match && chats[match.params.id]) {
        messages = chats[match.params.id].messages
    }
    return {
        chats,
        messages,
        chatId: match ? match.params.id : null
    }
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainerClass)