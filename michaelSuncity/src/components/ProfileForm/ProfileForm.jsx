import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, TextField, Fab} from '@material-ui/core';
import {Send} from '@material-ui/icons';

import './ProfileForm.scss';

export class ProfileForm extends Component
{
    state = {
        name: '',
        surname: '',
    };

    static propTypes = {
        onSend: PropTypes.func.isRequired,
    };


    onChangeInputHandler = (event) => {
        const fieldName = event.target.name;
        this.setState({[fieldName]: event.target.value});
    };

    onSubmitForm = () => {
        const {name} = this.state;
        const {surname} = this.state;
        const {onSend} = this.props;

        if(!name || !surname){
            console.log('Введите имя и фамилию');
            return;
        }

        if(typeof onSend === 'function'){
            onSend(this.state);
            this.setState({name: '', surname: ''});
        }

        console.log(this.state);
    };

    onSubmitFormEnter = (event) => {
        if (event.keyCode === 13 && event.ctrlKey) {
            event.preventDefault();
            this.onSubmitForm();
        }
    }

    render()
    {
        const {name, surname} = this.state;

        return (
            <div className="messageForm">
                <TextField 
                variant="outlined"
                name="name" 
                label="Имя" 
                onChange={this.onChangeInputHandler}
                onKeyDown={this.onSubmitFormEnter}  
                value={name}
                />
                 <TextField 
                className="messageFormText" 
                variant="outlined"
                name ="surname" 
                label="Фамилия"
                onChange={this.onChangeInputHandler}
                onKeyDown={this.onSubmitFormEnter} 
                value={surname}
                multiline
                autoFocus
                />
                <Fab variant="round" color="primary" onClick={this.onSubmitForm}><Send/></Fab>
            </div>
        );
    }
}