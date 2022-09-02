import {useSelector, useDispatch} from "react-redux";
import {onRemoveAllItems} from '../engine/core/thunk/thunks';

function Footer() {
    const items = useSelector((state) => state.todo.items);
    const dispatch = useDispatch();

    const onDelete = () => {
        dispatch(onRemoveAllItems())
    }
    return (
        <footer>
            Кол-ство todo-items: <b> {items.length} </b>
            <br/>
            <button onClick={onDelete}> delete all</button>
        </footer>
    )
}

export default Footer;