import React, {Component} from 'react';
import Avatar from "@material-ui/core/Avatar";
import {Link} from 'react-router-dom';
import {NavLink} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div className="w-100 text-center alert-primary navbar">
                <Link className="link" to='/profile'> <Avatar className='navbar-brand'/></Link>
                <div className="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink activeClassName="selected" className="nav-link text-white" to="/"> Чаты<span className="sr-only">(current)</span></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
