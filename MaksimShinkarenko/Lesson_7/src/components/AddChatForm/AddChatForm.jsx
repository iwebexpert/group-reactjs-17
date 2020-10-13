import React, {Component} from 'react';
import {Fab, TextField} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";


export class AddChatForm extends Component {

    state = {
        title: '',
    };

    onChangeInputHandler = (event) => {
        const fieldName = event.target.name;
        this.setState({[fieldName]: event.target.value});
    };

    onSubmitForm = () => {
        const {title} = this.state;
        const {onSend} = this.props;

        if(!title){
            alert('Введите название чата');
            return;
        }

        if(typeof onSend === 'function'){
            onSend(this.state);
            this.setState({title: ''});
        }
    };

    render()
    {
        const {title} = this.state;

        return (
            <div>
                <TextField
                    variant="outlined"
                    name="title"
                    label="Название"
                    onChange={this.onChangeInputHandler}
                    value={title} />
                <Fab className="addChatBtn" variant="round" color="primary" onClick={this.onSubmitForm}><AddIcon /></Fab>
            </div>
        );
    }

}