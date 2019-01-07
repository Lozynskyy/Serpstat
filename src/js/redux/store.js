import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import {createBrowserHistory} from "history";
import {routerMiddleware} from "react-router-redux";
import postsReducer from './reducers/postsReducer.js';
import postReducer from './reducers/postReducer.js';
import findPostsReducer from './reducers/findPostsReducer.js';
import sortPostsReducer from './reducers/sortPostsReducer';


let rootReducer = combineReducers({
    posts: postsReducer,
    post: postReducer,
    findPosts: findPostsReducer,
    sortType: sortPostsReducer
})

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk), applyMiddleware(routerMiddleware(history)))
);

export default store;