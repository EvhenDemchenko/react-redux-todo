//Core
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    type: "all",
    search: ''
}

const todo = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setItem: (state, action) => {
            state.items = action.payload;
        },
        setCompleted: (state, action) => {
            state.type = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        }
    }
})

export const {setItem, setCompleted, setSearch} = todo.actions;
export default todo.reducer;
