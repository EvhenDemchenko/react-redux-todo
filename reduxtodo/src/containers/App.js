//Core
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setItem} from "../engine/core/todo/slice";
//parts
import localForage from 'localforage';
import Item from "../components/Item";
import Footer from "../components/Footer";
import Form from "../components/Form";

function App() {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.todo.items);

    useEffect(() => {
        localForage.getItem('todo')
            .then(res => {
                if (res === null) {
                    localForage.setItem('todo', items)
                } else {
                    dispatch(setItem(res));
                }
            })
    }, [dispatch]);

    return (
        <div className="App">
            <Form/>
            {items.map(item => <Item key={item.id} value={item.value}/>)}
            <Footer/>
        </div>
    );
}

export default App;
