//Core
import {useDispatch } from "react-redux";
import {useState} from "react";
//Engine
import {onAddItem} from "../engine/core/thunk/thunks"
//Parts

export default function Form() {
    const [val, setVal] = useState('');
    const dispatch = useDispatch();

    const onAddToRedux = () => {
        dispatch(onAddItem(val, setVal))

    }
    const setInputValue = e => setVal(e.target.value);
    const preventSubmit = e => e.preventDefault();
    return (
        <form onSubmit={preventSubmit}>
            <input value={val} onChange={setInputValue} type="text"/>
            <button onClick={onAddToRedux}> add todo</button>
        </form>
    )
}