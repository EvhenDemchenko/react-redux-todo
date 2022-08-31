//Core
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
//Engine
import {setItem} from "../engine/core/todo/slice";
//Parts
import {v4} from "uuid";
import localForage from "localforage";


export default function Form() {
    const [val, setVal] = useState('');
    const items = useSelector((state) => state.todo.items)
    const dispatch = useDispatch();

    const onAddToRedux = async () => {
        const newItems = [...items, {value: val, id: v4()}];
        await localForage.setItem('todo', newItems)
            .then(() => {
                setVal('')
            })
        dispatch(setItem(newItems));
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input value={val} onChange={e => setVal(e.target.value)} type="text"/>
            <button onClick={onAddToRedux}> add todo</button>
        </form>
    )
}