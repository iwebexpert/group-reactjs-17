import React, {Component} from "react";
import {Switch, Route, Link} from 'react-router-dom';
import {push} from 'connected-react-router';
import {List, ListItem, ListItemText} from '@material-ui/core';

import './Header.scss';
import {connect} from "react-redux";

class HeaderClass extends Component {
    pushTo = () => {
        const {redirect} = this.props;
        redirect("/about");
    }

    render() {

        return (
            <div className='header'>
                <List className='nav'>
                    <ListItem>
                        <Link to="/"><ListItemText primary="Главная" /></Link>
                    </ListItem>
                    <ListItem>
                        {/*<Link to="/about"><ListItemText primary="О нас" /></Link>*/}
                        <div onClick={this.pushTo}>О нас</div>
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

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        redirect: (url) => dispatch(push(`${url}`)),
    };
}

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderClass);