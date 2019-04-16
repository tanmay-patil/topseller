import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'mobx-react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import axios, { AxiosRequestConfig } from 'axios';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
// import { syncHistoryWithStore } from 'mobx-react-router';

import App from './App';
// import * as serviceWorker from './serviceWorker';
// import rootStore from './stores';
// import loadAssets from './assets/editor/loader';
import './index.scss';
import Store, { history } from './store';

// const protocol =
//   process.env.REACT_APP_BACKEND_IS_SECURE === 'true' ? 'https' : 'http';
// const port = process.env.REACT_APP_BACKEND_PORT
//   ? `:${process.env.REACT_APP_BACKEND_PORT}`
//   : '';
// axios.defaults.baseURL = `${protocol}://${
//   process.env.REACT_APP_BACKEND_HOST
// }${port}/api/v1`;

axios.interceptors.request.use(config => {
    if (localStorage.accessToken) {
        config.headers['Authorization'] = `Bearer ${localStorage.accessToken}`;
    }
    return config;
});

const pallete = {
    primary: {}
};

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#d82929',
            dark: '#d82929'
        },
        secondary: {
            main: '#d82929'
        }
    },
    typography: {
        useNextVariants: true,

        fontFamily: "'Open Sans', sans-serif"
    }
});

const browserHistory = createBrowserHistory();
// const history = syncHistoryWithStore(browserHistory, rootStore.routerStore);

const Root = (
    <Provider store={Store}>
        <MuiThemeProvider theme={theme}>
            <App history={history} />
        </MuiThemeProvider>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
// loadAssets();
