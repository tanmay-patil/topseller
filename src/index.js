import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import Store, { history } from './store';
import App from './App';
import 'typeface-open-sans';
import * as serviceWorker from './serviceWorker';
import './index.scss';
import './static/styles/styles.scss';
import Header from './components/header';
import Footer from './components/footer';
import Main from './pages/Main/Main';

ReactDOM.render(
    <Provider store={Store}>
        <ConnectedRouter history={history}>
            <>
                <Header />
                <Switch>
                    <Route exact path="/" component={Main} />
                    {/* <Route exact path="/main/" component={Main} /> */}
                </Switch>
                <Footer />
            </>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
