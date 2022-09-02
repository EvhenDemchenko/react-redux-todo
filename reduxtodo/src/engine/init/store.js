//Engine
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
//Core
import todoReducer from '../core/todo/slice'

export const store = configureStore({
    reducer: {
        todo: todoReducer
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware() , thunk]
})