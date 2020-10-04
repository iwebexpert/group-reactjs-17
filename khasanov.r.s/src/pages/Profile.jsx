import React from "react";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

export function Profile() {
    return (
        <div>
            <h1>Profile</h1>
            <Link to="/"><Button variant="contained" color="primary">На главную</Button> </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquam consequuntur ea enim eveniet
                harum qui reprehenderit tempore temporibus veritatis? Error impedit officia sequi velit? Mollitia natus
                officiis quasi totam.</p>
        </div>
    )
}