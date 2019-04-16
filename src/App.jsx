import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router';
import UserServices from './services/UserServices';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import Header from './components/header';
import Footer from './components/footer';
import 'typeface-open-sans';
import './index.scss';
import './static/styles/styles.scss';

import SpecialBanner from './pages/SpecialBanner/SpecialBanner';
import Dialogs from './components/Dialogs/Dialogs';
import BuyerMemberSignup from './components/AccountSignUp/buyerMemberSignUp/BuyerMemberSignUp';
import ResellerSignup from './components/AccountSignUp/resellerMemberSignUp/resellerSignUp';
import SignUpMain from './pages/SignUpMain/SignUpMain';
import MyPageBuyerNotice from './pages/MyPageBuyerNotice/MyPageBuyerNotice';
import MyPageResellerNotice from './pages/MyPageResellerNotice/MyPageResellerNotice';
import MassOrderResellerSteps from './components/MassOrderResellerSteps';
import MypageResellerProfile from './components/MyPageResellerProfile/ResellerProfile';
import MyPageResellerStock from './pages/MyPageResellerStock/MyPageResellerStock';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <div>
        <Header />
        <Route
            {...rest}
            render={props =>
                UserServices.getAccessToken() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
        <Footer />
    </div>
);
const PublicRoute = ({ component: Component, ...rest }) => (
    <div>
        <Header />
        <Route {...rest} render={props => <Component {...props} />} />
        <Footer />
    </div>
);

const DefaultRoute = ({ home, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            UserServices.getAccessToken() ? (
                <Redirect to={home} />
            ) : (
                <Redirect to="/login" />
            )
        }
    />
);

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Router history={this.props.history}>
                    <Switch>
                        <DefaultRoute path="//" home="/login" />
                        <Route path="/login/" component={LoginPage} />

                        <PrivateRoute path="/home" component={MainPage} />

                        <PrivateRoute
                            exact
                            path="/special"
                            component={SpecialBanner}
                        />
                        <PrivateRoute
                            exact
                            path="/buyersignup"
                            component={BuyerMemberSignup}
                        />
                        <PrivateRoute
                            exact
                            path="/resellersignup"
                            component={ResellerSignup}
                        />

                        <PublicRoute
                            exact
                            path="/signup"
                            component={SignUpMain}
                        />

                        <PrivateRoute
                            exact
                            path="/mypagebuyernotice"
                            component={MyPageBuyerNotice}
                        />

                        <PrivateRoute
                            exact
                            path="/mypageresellernotice"
                            component={MyPageResellerNotice}
                        />

                        <PrivateRoute
                            exact
                            path="/mypageresellerstock"
                            component={MyPageResellerStock}
                        />

                        <PrivateRoute
                            path="/myPageResellerProfile"
                            component={MypageResellerProfile}
                        />

                        <PrivateRoute
                            path="/MassOrderResellerSteps"
                            component={MassOrderResellerSteps}
                        />
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}
export default App;
