import React, {Component} from 'react';
import {Link} from '@material-ui/core';
import './Header.scss';

export class Header extends Component{

    render(){
        return(
            <div className={"header"}>
                <div className="header-menu">
                    <Link
                        component="button"
                        color="inherit"
                        variant="body1"
                        onClick={() => {
                            console.info("I'm a button.");
                            }}
                        >
                        Меню проекта
                    </Link>
                </div>
                <div className="header-nameProject"> <p>ReactJS</p></div>
            </div>
        );
    }
}