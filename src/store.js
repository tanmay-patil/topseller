import { createStore, applyMiddleware, compose } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import createRootReducers from './reducers';

export const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
          })
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
    // other store enhancers if any
);
const store = createStore(createRootReducers(history), enhancer);

// const store = createStore(
//     createRootReducers(history),
//     {},
//     composeWithDevTools(applyMiddleware(...middlewares))
// );
export default store;
