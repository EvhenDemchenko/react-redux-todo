import {useSelector, useDispatch} from "react-redux";
import {onRemoveAllItems} from '../engine/core/thunk/thunks';
import {useEffect, useState} from "react";
import Selectors from "../engine/init/selectors";

function Footer() {
    const items = useSelector(Selectors.items);
    const completed = useSelector(Selectors.completed);
    const dispatch = useDispatch();

    const [value, setValue] = useState([]);

    useEffect(() => {
        setValue(items);
    }, [items]);

    useEffect(() => {
        setValue(completed);
    }, [completed]);

    const onDelete = () => {
        dispatch(onRemoveAllItems());
    }

    return (
        <footer>
            Кол-ство todo-items: <b> {value.length} </b>
            <br/>
            <button onClick={onDelete}> delete all</button>
        </footer>
    )
}

export default Footer;