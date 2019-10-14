import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Login } from './assets/components/Login';
import './assets/css/Util.css';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/">
                <div className="gravity-center">
                    <Login />
                </div>
            </Route>
        </Switch>
    </Router>,
    document.getElementById('root')
);
