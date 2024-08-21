import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./reducers"
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { configureStore } from '@reduxjs/toolkit';
import { configure } from '@testing-library/react';
import productReducer from './reducers/productSlice';
import authenticateReducer from './reducers/authenticateReducer';

// let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const store =  configureStore({
    reducer: {
        auth: authenticateReducer,
        product: productReducer
    }
})

export default store;
