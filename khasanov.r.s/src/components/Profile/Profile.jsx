import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

export class Profile extends Component {
    render() {
        const {profile} = this.props;
        console.log('profile', profile);
        return (
            <div>
                <h1>Profile</h1>
                <Link to="/"><Button variant="contained" color="primary">На главную</Button> </Link>

                <div>
                    <TextField id="standard-basic" label="nic" value={profile.name}/>
                </div>
                <div>
                    <TextField id="filled-basic" label="FirstName" value={profile.firstName}/>
                </div>
                <div>
                    <TextField id="outlined-basic" label="LastName" value={profile.lastName}/>
                </div>
                <div>
                    <TextField id="tt" label="SecondName" value={profile.secondName}/>
                </div>
            </div>
        )
    }
}