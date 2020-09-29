import React, {Component} from 'react';
import {TextField, FloatingActionButton} from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

export default class AddMessage extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.value)
    }

    handleSubmit(e) {
        this.props.onSubmit();
        e.preventDefault();
    }



    render() {
        let newMessage = this.props.newMessage;
        return (
            <div >
                <form onSubmit={this.handleSubmit} className="d-flex w-100 p-3">
                    <TextField
                        name="input"
                        fullWidth={true}
                        hintText="Введите сообщение"
                        style={{fontSize: '22px'}}
                        value={newMessage}
                        onChange={this.handleChange}
                    />
                    <FloatingActionButton
                        type="submit">
                        <SendIcon />
                    </FloatingActionButton>

                </form>
            </div>
        );
    }
}
