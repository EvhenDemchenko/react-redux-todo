//Core
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {init} from "../engine/core/thunk/thunks";
//parts
import Item from "../components/Item";
import Footer from "../components/Footer";
import Form from "../components/Form";

function App() {
    const dispatch = useDispatch();
    const items = useSelector(state => state.todo.items);
    useEffect(() => {
        dispatch(init());
    }, [dispatch]);

    return (
        <div className="App">
            <Form/>
            {items.map(({id, value, editable, complete}) => <Item key={id} value={value} id={id} editable={editable}
                                                                  complete={complete}/>)}
            <Footer/>
        </div>
    );
}

export default App;
