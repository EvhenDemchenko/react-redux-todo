//Core
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setItem} from "../engine/core/todo/slice";
import {v4} from "uuid"
//parts
import localForage from 'localforage';
import Item from "../components/Item";
import Footer from "../components/Footer";

function App() {
    const dispatch = useDispatch();
    const items = useSelector((state) => {
        return state.todo.items;
    })
    const [val, setVal] = useState('');

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

    const onAddToRedux = async () => {
        console.log(items)
        const newItems = [...items, {value: val, id: v4()}];
        await localForage.setItem('todo', newItems)
            .then(()=>{
                setVal('')
            })
        dispatch(setItem(newItems));
    }

    return (
        <div className="App">
            <form onSubmit={e => e.preventDefault()}>
                <input value={val} onChange={e => setVal(e.target.value)} type="text"/>
                <button onClick={onAddToRedux}> add todo</button>
            </form>
            {items.map(item => <Item key={item.id} value={item.value}/>)}
            <Footer/>
        </div>
    );
}

export default App;
