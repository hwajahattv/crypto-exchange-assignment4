const users = [
    {
        id: 1,
        email: "test@gmail.com",
        name: "Test",
        password: "1234",
        address: "akjndk",
        retries: 0,
        blocked: false,
        coins: 100,
        loggedIn: false,
    },
    {
        id: 2,
        email: "test1@gmail.com",
        name: "Test1",
        password: "1234",
        address: "akjndk",
        retries: 0,
        blocked: false,
        coins: 100,
        loggedIn: false,
    },
];
const loggedInUser = {};

const initialState = {
    users: users,
    loggedInUser: loggedInUser,
};

const UserReducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case "TRANSFER":
            //user.coins - action.payload.transferredCoins
            console.log(action.payload);
            return {
                ...state,
                users: action.payload?.users,
            };
        case "LOGIN":
            //user.coins - action.payload.transferredCoins
            console.log(action.payload);
            return {
                ...state,
                loggedInUser: action.payload.user,
            };
        default:
            return state;
    }
};

export default UserReducer;
