//Core
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {init} from "../engine/core/thunk/thunks";
import Selectors from '../engine/init/selectors';
//parts
import Item from "../components/Item";
import Footer from "../components/Footer";
import Form from "../components/Form";
import {setSearch} from "../engine/core/todo/slice"
//UI

import {Container} from "@mui/material";
import {TextField} from "@mui/material"
//Style
import {useStyles} from "../styles/style"

function App() {
    const dispatch = useDispatch();
    const items = useSelector(Selectors.searchItems);
    const classes = useStyles();

    useEffect(() => {
        dispatch(init());
    }, [dispatch]);

    const handleSearch = (e) => {
        dispatch(setSearch(e.target.value))
    }
    return (
        <Container className={classes.App} maxWidth="md">
            <Form/>
            {items.map(({id, value, editable, complete}) => <Item
                key={id}
                value={value}
                id={id}
                editable={editable}
                complete={complete}/>)
            }
            <Container className={classes.SearchContainer} maxWidth='md'>
                <Footer/>
                <TextField label="Search..." variant="filled" type="text" onChange={handleSearch}/>
            </Container>
        </Container>
    );
}

export default App;
