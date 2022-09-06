import {createSelector} from "@reduxjs/toolkit";

const selector = {
    items: state => state.todo.items,
    complete: state => state.todo.items.filter(item => item.complete === true),
    type: state => state.todo.type,
    search: state => state.todo.search,
}
const completeItems = {
    memoItems: createSelector(
        [selector.items, selector.type]
        , (items, type) => {
            if (type === 'completed') {
                return items.filter(item => item.complete)
            }
            return items
        })
}
const searchItems = {
    searchItems: createSelector(
        [completeItems.memoItems, selector.search]
        , (allItems, searchValue) => {
            return (allItems.filter(item => item.value.trim().toLowerCase().includes(searchValue.trim().toLowerCase())));
        }),
}
export default {...selector, ...completeItems, ...searchItems}