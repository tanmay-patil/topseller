import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import Store, { history } from './store';
// import App from './App';
import 'typeface-open-sans';
import * as serviceWorker from './serviceWorker';
import './index.scss';
import './static/styles/styles.scss';
import Header from './components/header';
import Footer from './components/footer';
import MainPage from './pages/MainPage/MainPage';
import SpecialBanner from './pages/SpecialBanner/SpecialBanner';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Dialogs from './components/Dialogs/Dialogs';
import BuyerMemberSignup from './components/AccountSignUp/buyerMemberSignUp/BuyerMemberSignUp';
import ResellerSignup from './components/AccountSignUp/resellerMemberSignUp/resellerSignUp';
import SignUpMain from './pages/SignUpMain/SignUpMain';
import MyPageBuyerNotice from './pages/MyPageBuyerNotice/MyPageBuyerNotice';
import MyPageResellerNotice from './pages/MyPageResellerNotice/MyPageResellerNotice';
import MassOrderResellerSteps from './components/MassOrderResellerSteps';
import MypageResellerProfile from './components/MyPageResellerProfile/ResellerProfile';
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

ReactDOM.render(
    <Provider store={Store}>
        <MuiThemeProvider theme={theme}>
            <ConnectedRouter history={history}>
                <Header />
                <Dialogs history={history} />
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/special" component={SpecialBanner} />
                    <Route
                        exact
                        path="/buyersignup"
                        component={BuyerMemberSignup}
                    />
                    <Route
                        exact
                        path="/resellersignup"
                        component={ResellerSignup}
                    />

                    <Route exact path="/signup" component={SignUpMain} />

                    <Route
                        exact
                        path="/mypagebuyernotice"
                        component={MyPageBuyerNotice}
                    />
                    <Route
                        exact
                        path="/mypageresellernotice"
                        component={MyPageResellerNotice}
                    />

                    <Route path="/myPageResellerProfile" component={MypageResellerProfile} />
                    <Route path="/MassOrderResellerSteps" component={MassOrderResellerSteps} />
                </Switch>
                <Footer />
            </ConnectedRouter>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
