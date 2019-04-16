import axios, { AxiosResponse } from 'axios';

class UserServices {
    getAccessToken() {
        return window.localStorage.getItem('topseller_accessToken');
    }

    isTokenValid = token => {};

    getOAuth2 = () => {
        var ClientOAuth2 = require('client-oauth2');

        const OAuth2 = new ClientOAuth2({
            clientId: 'topseller',
            clientSecret: 'topseller',
            accessTokenUri: 'http://3.18.163.90/oauth/token',
            authorizationUri: 'http://3.18.163.90/oauth/authorize',
            redirectUri: 'http://3.18.163.90/oauth/callback',
            scopes: ['read', 'write']
        });

        return OAuth2;
    };

    logout() {
        window.localStorage.removeItem('fk_content_tool_accessToken');
    }

    getUser() {
        return axios({
            baseURL: `http://${process.env.REACT_APP_MOCK_BACKEND_HOST}:${
                process.env.REACT_APP_MOCK_BACKEND_PORT
            }/api/v1`,
            url: '/user',
            method: 'get'
        }).then(response => {
            const user = {
                id: response.data.id,
                name: response.data.name,
                avatar: '/images/user-placeholder.png' || response.data.avatar
            };
            window.localStorage.setItem(
                'fk_content_tool_user',
                JSON.stringify(user)
            );
            return user;
        });
    }
}

export default new UserServices();
