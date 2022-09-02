//Core
import {useState} from "react";
//Engine
import {onDeleteItem, editItem, onCompleteItem} from "../engine/core/thunk/thunks";
//Redux
import {useDispatch, useSelector} from "react-redux";

function Item({value, id, editable, complete}) {
    const dispatch = useDispatch();
    const items = useSelector(state => state.todo.items);
    const [val, setVal] = useState(value)

    const onDelete = () => {
        dispatch(onDeleteItem(id, items));
    }
    const onEdite = () => {
        dispatch(editItem(id, val))
    }
    const onComplete = () => {
        dispatch(onCompleteItem(id))
    }

    return (
        <div className="item">
            <label className="itemValue">
                <input onClick={onComplete} type="checkbox" defaultChecked={complete}/>
                {editable
                    ? <input type="text" value={val} onChange={e => setVal(e.target.value)}/>
                    : <b>{val}</b>}
            </label>
            <div>
                <button onClick={onEdite}> edit item</button>
                <button onClick={onDelete}> delete</button>
            </div>
        </div>
    )
}

export default Item;