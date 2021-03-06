import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TextField, Fab} from '@material-ui/core';
import {Send} from '@material-ui/icons';

export class MessageForm extends Component {
    state = {
        text: '',
        author: '',
    }

    static propTypes = {
        onSend: PropTypes.func.isRequired
    };

    componentDidMount() {
        if (!this.state.author && this.props.profile && this.props.profile.name) {
            this.setState({
                text: '',
                author: this.props.profile.name
            });
        }
    }

    onChangeInputHandler = (event) => {
        const fieldName = event.target.name;
        this.setState({[fieldName]: event.target.value});
    }

    submitForm = () => {
        const {text, author} = this.state;
        if (!text || !author) {
            alert('Заполните форму');
            return
        }
        this.props.onSend(this.state);
        this.setState({text: '', author: author})
    }

    onKeyEnter = (event) => {
        if (event.keyCode === 13 && event.ctrlKey) {
            event.preventDefault();
            this.submitForm();
        }
    };

    render() {
        const {text, author} = this.state;
        return (
            <div>
                <TextField id="author" label="Author" variant="outlined" name="author"
                           value={author} onChange={this.onChangeInputHandler}
                           placeholder='Укажите автора сообщения'/>
                <TextField id="text" label="Text" variant="outlined" name="text"
                           value={text} onChange={this.onChangeInputHandler}
                           placeholder='Введите текст сообщения'
                           multiline
                           autoFocus
                           onKeyDown={this.onKeyEnter}
                />
                <Fab variant="round" color="primary" onClick={this.submitForm}><Send/></Fab>
            </div>
        );
    }
}