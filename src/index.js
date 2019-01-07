import React, { Component } from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from "react-router-redux";
import store, { history } from './js/redux/store.js';
import PostsList from "./js/components/PostsList";
import Post from "./js/components/Post"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(<Provider store={store}>
    <Router>
        <Switch>
            <Route exact path="/" component={PostsList}/>
            <Route path="/post/:id" component={Post}/>
        </Switch>
    </Router>
</Provider>
    , document.getElementById('root'));