import React from 'react';
import {Header} from "../Header";
import {Switch, Route} from 'react-router-dom';

import './Layout.scss';
import {routes} from "../../routes";

export const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <Switch>
        {routes.map((route, index) => (<Route key={index} {...route} />))}
      </Switch>
    </div>
  );
};
