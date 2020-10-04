import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TextField, Fab} from '@material-ui/core';
import {Send} from '@material-ui/icons';

export class ChatForm extends Component {
    state = {
        name: '',
    }

    static propTypes = {
        onSend: PropTypes.func.isRequired
    };

    onChangeInputHandler = (event) => {
        const fieldName = event.target.name;
        this.setState({[fieldName]: event.target.value})
        console.log(this.state)
    }

    submitForm = () => {
        const {name, author} = this.state;
        if (!name || !author) {
            alert('Заполните форму');
            return
        }
        this.props.onSend(this.state);
        this.setState({text: '', author: author})
    }

    onKeyEnter = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            this.submitForm();
        }
    };

    render() {
        const {name} = this.state;
        return (
            <div>
                <TextField id="text" label="Text" variant="outlined" name="text"
                           value={name} onChange={this.onChangeInputHandler}
                           placeholder='Добавить чат'
                           onKeyDown={this.onKeyEnter}
                />
            </div>
        );
    }
}