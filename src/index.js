import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import Store, { history } from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.scss';

import Main from './pages/Main/Main';

ReactDOM.render(
    <Provider store={Store}>
        <ConnectedRouter history={history}>
            <>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/main/" component={Main} />
                </Switch>
            </>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
