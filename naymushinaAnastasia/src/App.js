import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from "./components/Layout";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Messenger from "./components/Messenger";


function App() {
    return (
        <BrowserRouter>
        <MuiThemeProvider>
            <Switch>
                <Route exact={true} path='/' component={Layout}/>
            </Switch>
        </MuiThemeProvider>
        </BrowserRouter>
    );
}

export default App;
