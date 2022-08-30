//Engine
import {configureStore} from "@reduxjs/toolkit";
//Core
import todoReducer from '../core/todo/slice'

export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})