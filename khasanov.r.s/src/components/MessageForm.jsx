import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class MessageForm extends Component {
    state = {
        text: '',
        author: '',
    }

    static propTypes = {
        onSend: PropTypes.func.isRequired
    };

    render() {
        const {text, author} = this.state;
        return (
            <div>
                <div>
                    <input type="text" name="author" id="author" value={author}
                           placeholder='Укажите автора сообщения' onChange={this.onChangeInputHandler}/>
                </div>
                <div>
                    <textarea name="text" id="text" cols="30" rows="10" value={text}
                              placeholder='Введите текст сообщения' onChange={this.onChangeInputHandler}/>
                </div>
                <div>
                    <button onClick={this.submitForm}>Отправить сообщение</button>
                </div>
            </div>
        );
    }

    onChangeInputHandler = (event) => {
        const fieldName = event.target.name;
        this.setState({[fieldName]: event.target.value})
        console.log(this.state)
    }

    submitForm = () => {
        const {text, author} = this.state;
        if (!text || !author) {
            alert('Заполните форму');
            return
        }
        this.props.onSend(this.state);
        this.setState({text: '', author: ''})
    }
}