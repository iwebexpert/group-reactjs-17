import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chip, Avatar } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'
import classNames from 'classnames'

export default class Message extends Component {

    state = {
        isSelectMessage: false,
    }

    handleDelete = () => {
        this.setState({isSelectMessage: !this.state.isSelectMessage})

        this.props.handleAlert(
            `выбрано сообщение ${this.props.message.name} : ${this.props.message.text}`, 
            'message alert',
            { id: this.props.message.id, isSelect: false, status: !this.state.isSelectMessage }
        )
    }
    
    static propTypes = {
        message: PropTypes.shape({
            text: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    }
 
    render() {
        const classes = classNames('messages', {
            'me' : this.props.message.name === 'me',
            'message' : this.props.message.name !== 'me'
        }) 
        return(
            <div className="message-block"> 
                <Chip 
                    deleteIcon={<DoneIcon />} 
                    color={ this.props.message.name === 'me' ? 'primary' : 'secondary' }
                    className={ classes }
                    clicable="true"
                    onDelete={ this.handleDelete } 
                    label={ this.props.message.text }
                    avatar={ <Avatar> { this.props.message.name }</Avatar> } />
            </div>
        )
    }
}

