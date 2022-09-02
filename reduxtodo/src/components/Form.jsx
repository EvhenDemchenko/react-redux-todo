//Core
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
//Engine
import {setItem} from "../engine/core/todo/slice";
import {onAddItem} from "../engine/core/thunk/thunks"
//Parts
import {v4} from "uuid";
import localForage from "localforage";


export default function Form() {
    const [val, setVal] = useState('');
    const dispatch = useDispatch();

    const onAddToRedux = () => {
        dispatch(onAddItem(val))
        setVal('')
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input value={val} onChange={e => setVal(e.target.value)} type="text"/>
            <button onClick={onAddToRedux}> add todo</button>
        </form>
    )
}