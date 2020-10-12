import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chip, Avatar, Paper, Typography, Container, IconButton } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'
import DeleteIcon from '@material-ui/icons/Delete'
import classNames from 'classnames'

export default class Message extends Component {

    state = {
        isSelectMessage: false,
    }

    handleSelect = () => {
        this.setState( {isSelectMessage: !this.state.isSelectMessage} )
    }

    handleDelete = () => {
        this.setState({ isSelectMessage: !this.state.isSelectMessage })
        let isSelectMessage = !this.state.isSelectMessage
        this.props.handleAlert(
            `выбрано сообщение ${this.props.message.name} : ${this.props.message.text}`,
            'inform', 
            isSelectMessage,
            this.props.message.id
         )
    }
    
    static propTypes = {
        message: PropTypes.shape({
            text: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    }
 
    render() {
        const { avatar, masterAvatar } = this.props
        const classes = classNames('message', {
            'me__message' : this.props.message.name === 'me',
            'bot__message' : this.props.message.name !== 'me'
        }) 

        return(

            <div className="message-block"> 
                <Chip 
                    deleteIcon={ <DeleteIcon /> } 
                    color={ this.props.message.name === 'me' ? 'primary' : 'secondary' }
                    className={ classes }
                    clicable={ true }
                    onDelete={ this.handleDelete } 
                    label={ 
                        <Typography variant="caption" className="chip-label">
                            {this.props.message.text}
                        </Typography> }
                    avatar={ 
                        <Avatar src={ this.props.message.name === 'me' ? masterAvatar : avatar }> 
                            { this.props.message.name }
                        </Avatar> } 
                    />
            </div>
        )
    }
}

