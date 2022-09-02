import localForage from "localforage";
import {setItem} from "../todo/slice";
import {v4} from "uuid";

export const onDeleteItem = (id, items) => (action) => {
    const res = items.filter(item => {
        if (item.id !== id) {
            return item
        }
    })
    localForage.setItem('todo', res)
        .then(res => {
            return action(setItem(res));
        })
};

export const onRemoveAllItems = () => action => {
    localForage.setItem('todo', [])
        .then(() => {
            action(setItem([]));
        })
};

export const editItem = (id, value) => (action, getState) => {
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
            return action(setItem(res));
        })
};

export const onAddItem = (value) => (action, getState) => {
    const items = getState().todo.items;

    const newItems = [...items,
        {value: value, id: v4(), editable: false, complete: false}
    ];
    localForage.setItem('todo', newItems)
        .then(() => {
            action(setItem(newItems));
        })
};

export const onCompleteItem = (id) => (action, getState) => {
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
            action(setItem(res))
        })
};

export const init = () => (action, getState) => {
    const items = getState().todo.items;

    localForage.getItem('todo')
        .then(res => {
            if (res === null) {
                localForage.setItem('todo', items)
            } else {
                action(setItem(res));
            }
        })
}