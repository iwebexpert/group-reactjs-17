import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import {FormLabel} from '@material-ui/core';
import TextField from "@material-ui/core/TextField";


export default class AddNewChat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisible: false,
            title: "",
            error: false
        }

    }

    handleChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    submit(event) {
        event.preventDefault();
        if (this.state.title.length <= 0) {
            this.setState({error: true});
        } else {

            this.setState({
                error: false,
                title: ""
            });
            this.props.submit(this.state.title);
        }
    }

    render() {
        const error = this.state.error ? `error` : '';
        return (
            <div>
                <Button className="mt-2 ml-3"
                        variant="outlined"
                        color="primary"
                        onClick={() => this.setState({formVisible: !this.state.formVisible})}>
                    Добавить чат
                </Button>
                {this.state.formVisible &&
                <form className="m-2">
                    <div className="form-group">
                        <TextField aria-invalid={this.state.error}
                                   error={this.state.error}
                                   id="title"
                                   label="Название чата"
                                   value={this.state.title}
                                   className="form-control"
                                   helperText={this.state.error && "Поле не может быть пустым"}
                                   onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <Button className="btn btn-primary mt-3" type="submit" variant="contained" color="primary"
                            onClick={(event) => this.submit(event)}>
                        Добавить
                    </Button>
                </form>}
            </div>


        );
    }

};
