import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TextField} from '@material-ui/core';

export class Profile extends Component
{

    state = {
        author: '',
    };

 
    render(){

        const {author} = this.state;

        return (
            <div>
                <h1>Profile</h1>
                <TextField 
                variant="outlined"
                name="author" 
                label="Name" 
                onChange={this.onChangeInputHandler} 
                value={author}
                />             
            </div>
        )
    }
}