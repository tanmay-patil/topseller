
import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router'
import createRootReducers from './reducers';

export const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];
const store = createStore(
    createRootReducers(history),
    {},
    composeWithDevTools(
        applyMiddleware(...middlewares))
);
export default store;