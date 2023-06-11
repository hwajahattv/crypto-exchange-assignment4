import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducers/user-reducer";

const store = configureStore({
    reducer: {
        UserReducer: UserReducer,
    },
});

export default store;
