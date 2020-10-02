import React, {Component} from "react";
import {Switch, Route, Link} from 'react-router-dom';
import {List, ListItem, ListItemText} from '@material-ui/core';

import './Header.scss';

export class Header extends Component {
    render() {
        return (
            <div className='header'>
                <List className='nav'>
                    <ListItem>
                        <Link to="/"><ListItemText primary="Главная" /></Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/about"><ListItemText primary="О нас" /></Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/profile"><ListItemText primary="Профиль" /></Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/pagenotfount"><ListItemText primary="Страница с ошибкой" /></Link>
                    </ListItem>
                </List>
            </div>
        )
    }
}