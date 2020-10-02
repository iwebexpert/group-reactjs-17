import React from 'react';

import './Layout.css';
import {Header} from "../Header";
import {Route, Switch} from "react-router-dom";
import {routes} from "../../routes";

export const Layout = () => {
  return (
    <div className="main-container">
      <Header />
      <Switch>
        {routes.map((route, index) => (<Route key={index} {...route} />))}
      </Switch>
    </div>
  );
};
