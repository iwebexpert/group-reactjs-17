import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TextField, Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export class ChatForm extends Component {
    state = {
        title: '',
    }

    static propTypes = {
        onSend: PropTypes.func.isRequired
    };

    onChangeInputHandler = (event) => {
        const fieldName = event.target.name;
        this.setState({[fieldName]: event.target.value});
    }

    submitForm = () => {
        const {title} = this.state;
        if (!title) {
            alert('Укажите название чата');
            return
        }
        this.props.onSend(this.state);
        this.setState({title: ''})
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
                <TextField id="title" label="Название чата" variant="outlined" name="title"
                           value={name} onChange={this.onChangeInputHandler}
                           placeholder='Добавить чат'
                           onKeyDown={this.onKeyEnter}
                           size="small"
                />
                <Fab color="primary" aria-label="add" onClick={this.submitForm}>
                    <AddIcon/>
                </Fab>
            </div>
        );
    }
}