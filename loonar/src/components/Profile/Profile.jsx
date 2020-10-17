import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

export class Profile extends Component {
    state = {
        name: '',
        firstName: '',
        lastName: '',
        secondName: '',
    }

    componentDidMount() {
        this.setState(this.props.profile);
    }

    onChangeInputHandler = (event) => {
        const fieldName = event.target.name;
        this.setState({[fieldName]: event.target.value});
    }

    saveProfile = () => {
        this.props.handleUpdateProfile(this.state)
    }

    render() {
        const {isLoading, isError, handleProfileReload} = this.props;
        const {name, firstName, lastName, secondName} = this.state;

        if (isLoading) {
            return (<div>Loading...</div>);
        }
        if (isError) {
            return (<div>Error. Попробуйте позднее. <button onClick={handleProfileReload}>Обновить</button></div>);
        }
        return (
            <div>
                <h1>Profile</h1>
                <div>
                <TextField name="name" label="nic" value={name}
                               onChange={this.onChangeInputHandler}/>
                </div>
                <div>
                    <TextField name="firstName" label="FirstName" value={firstName}
                               onChange={this.onChangeInputHandler}/>
                </div>
                <div>
                <TextField name="lastName" label="LastName" value={lastName}
                               onChange={this.onChangeInputHandler}/>
                </div>
                <div>
                <TextField name="secondName" label="SecondName" value={secondName}
                               onChange={this.onChangeInputHandler}/>
                </div>
                <div>
                <Button variant="contained" color="secondary" onClick={this.saveProfile}>Сохранить</Button>
                </div>
            </div>
        )
    }
}