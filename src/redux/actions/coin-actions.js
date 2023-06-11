import { types } from "./types";

export const transfer = (users) => ({
    type: types.TRANSFER_COINS,
    payload: { users },
});

export const login = (user) => ({
    type: types.LOGIN,
    payload: { user },
});
