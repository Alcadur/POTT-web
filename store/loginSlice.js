import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: null
    },
    reducers: {
        setUser(state, action) {
            return { ...state, user:  action.payload };
        },
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: (builder) => {
        builder
            .addCase(HYDRATE, (state, action) => ({ ...state, ...action.payload.login }));
    },
});

export const { setUser } = loginSlice.actions;

export const selectUser = (state) => state.login.user;
export const selectIsLoggedIn = (state) => Boolean(selectUser(state));

export default loginSlice.reducer;