import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class MessageForm extends Component
{
    state = {
        text: '',
        author: '',
    };

    static propTypes = {
        onSend: PropTypes.func.isRequired,
    };

    /*onChangeInputHandler = (event) => {
        this.setState({text: event.target.value});
    };*/

    onChangeInputHandler = (event) => {
        const fieldName = event.target.name;
        this.setState({[fieldName]: event.target.value});
    };

    onSubmitForm = () => {
        const {text} = this.state;
        const {onSend} = this.props;

        if(!text){
            console.log('Введите сообщение');
            return;
        }

        if(typeof onSend === 'function'){
            onSend(this.state);
            this.setState({text: '', author: ''});
        }

        console.log(this.state);
    };

    render()
    {
        const {text, author} = this.state;

        return (
            <div>
                <div>
                    <input name="author" placeholder="Автор" onChange={this.onChangeInputHandler} value={author}/>
                </div>
                <div>
                    <textarea name ="text" placeholder="Введите текст сообщения" onChange={this.onChangeInputHandler} value={text} />
                </div>
                <div>
                    <button onClick={this.onSubmitForm}>Отправить сообщение</button>
                </div>
            </div>
        );
    }
}