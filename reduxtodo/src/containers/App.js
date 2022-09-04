//Core
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {init, showCompletedItems} from "../engine/core/thunk/thunks";
import Selectors from '../engine/init/selectors';
//parts
import Item from "../components/Item";
import Footer from "../components/Footer";
import Form from "../components/Form";
import {setCompleted} from "../engine/core/todo/slice";

function App() {
    const dispatch = useDispatch();
    const items = useSelector(Selectors.items);
    const completed = useSelector(Selectors.completed);
    const [value, setValue] = useState([]);

    useEffect(() => {
        dispatch(init());
    }, [dispatch]);

    useEffect(() => {
        setValue(items)
    }, [items]);

    useEffect(() => {
        setValue(completed)
    }, [completed]);


    const showCompleted = () => {
        dispatch(showCompletedItems())
    }
    const showAllItems = () => {
        dispatch(setCompleted(items));
    }
    return (
        <div className="App">
            <div>
                <button onClick={showCompleted}>
                    completed
                </button>
                <button onClick={showAllItems}>
                    all
                </button>
            </div>
            <Form/>
            {value.map(({id, value, editable, complete}) => <Item
                key={id}
                value={value}
                id={id}
                editable={editable}
                complete={complete}/>)}
            <Footer/>
        </div>
    );
}

export default App;
