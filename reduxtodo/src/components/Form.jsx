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