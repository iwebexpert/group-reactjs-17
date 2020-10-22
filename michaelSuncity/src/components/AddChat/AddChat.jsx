import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TextField, Fab} from '@material-ui/core';
import {Send} from '@material-ui/icons';


export class AddChat extends Component
{

    state = {
        title: '',
    }

    static propTypes = {
        onSend: PropTypes.func.isRequired,
    };


    onChangeInputHandler = (event) => {
        const fieldName = event.target.name;
        this.setState({[fieldName]: event.target.value});
    };

    onSubmitForm = () => {
        const {title} = this.state;
        const {onSend} = this.props;

        if(!title){
            alert('Введите название нового чата');
            return;
        }

        if(typeof onSend === 'function'){
            onSend(this.state);
        }
       
        console.log(this.state.title);
    };
 
    render(){

        const {title} = this.state;

        return (
            <div>
                <h1>New title</h1>
                <TextField 
                variant="outlined"
                name="title" 
                label="Title"
                value={title} 
                onChange={this.onChangeInputHandler} 
                autoFocus
                />          
                <Fab variant="round" color="primary" onClick={this.onSubmitForm}><Send /></Fab>
            </div>
        )
    }
}