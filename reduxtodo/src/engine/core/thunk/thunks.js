import localForage from "localforage";
import {setItem, setCompleted} from "../todo/slice";
import {v4} from "uuid";

export const onDeleteItem = (id, items) => (dispatch) => {
    const res = items.filter(item => {
        if (item.id !== id) {
            return item
        }
    })
    localForage.setItem('todo', res)
        .then(res => {
            return dispatch(setItem(res));
        })
};

export const onRemoveAllItems = () => dispatch => {
    localForage.setItem('todo', [])
        .then(() => {
            dispatch(setItem([]));
        })
};

export const editItem = (id, value) => (dispatch, getState) => {
    const items = getState().todo.items;

    const res = items.map(item => {
        const editable = !item.editable;
        if (item.id === id) {
            return {...item, editable, value}
        }
        return item;
    })
    localForage.setItem('todo', res)
        .then(res => {
            return dispatch(setItem(res));
        })
};

export const onAddItem = (value,setValue) => (dispatch, getState) => {
    const items = getState().todo.items;

    const newItems = [...items,
        {value: value, id: v4(), editable: false, complete: false}
    ];
    localForage.setItem('todo', newItems)
        .then(() => {
            dispatch(setItem(newItems));
            setValue('');
        })
};

export const onCompleteItem = (id) => (dispatch, getState) => {
    const items = getState().todo.items;

    const res = items.map(item => {
        const complete = !item.complete;
        if (item.id === id) {
            return {...item, complete}
        }
        return item;
    })
    localForage.setItem('todo', res)
        .then(res => {
            dispatch(setItem(res));
        })
};

export const init = () => (dispatch, getState) => {
    const items = getState().todo.items;
    localForage.getItem('todo')
        .then(res => {
            if (res === null) {
                localForage.setItem('todo', items);
            } else {
                dispatch(setItem(res));
            }
        })
};

export const showCompletedItems = () => (dispatch, getState) => {
    const items = getState().todo.items;
    const res = items.filter(item=> item.complete === true);
    return dispatch(setCompleted(res))
}