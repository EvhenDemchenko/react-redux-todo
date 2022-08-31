//Core
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

const todo = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setItem: (state, action) => {
            state.items = action.payload;
        }
    }
})

export const {setItem} = todo.actions;
export default todo.reducer;