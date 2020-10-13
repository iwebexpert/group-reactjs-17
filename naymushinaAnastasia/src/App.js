import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Header from "./components/Header";
import {routes} from './routes';


function App() {
    return (
        <BrowserRouter>
            <MuiThemeProvider>
                <div className="h-90">
                <Header/>
                <Switch>
                    {routes.map((route, index) => (<Route key={index} {...route} />))}
                </Switch>
                </div>
            </MuiThemeProvider>
        </BrowserRouter>
    );
}

export default App;
