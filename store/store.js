import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { loginSlice } from 'pott/store/loginSlice';

const makeStore = () => configureStore({
        reducer: {
            [loginSlice.name]: loginSlice.reducer
        },
        devTools: true,
    });

export const wrapper = createWrapper(makeStore);