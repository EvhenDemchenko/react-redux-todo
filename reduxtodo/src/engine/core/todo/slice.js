//Core
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    completed: []
}

const todo = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setItem: (state, action) => {
            state.items = action.payload;
        },
        setCompleted: (state, action) => {
            state.completed = action.payload;
        }
    }
})

export const {setItem, setCompleted} = todo.actions;
export default todo.reducer;
