const userReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_USER_AUTH':
            return action.user;

        default:
            return state;
    }
};

export default userReducer;
