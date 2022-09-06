//Core
import {useState} from "react";
//Engine
import {onDeleteItem, editItem, onCompleteItem} from "../engine/core/thunk/thunks";
//Redux
import {useDispatch, useSelector} from "react-redux";
//Icons
import {Delete} from "@mui/icons-material";
import {Mode} from '@mui/icons-material';
//Style
import {Button} from "@mui/material";
import {Checkbox} from "@mui/material";
import {TextField} from "@mui/material";
import {ListItem} from "@mui/material";
import {useStyles} from "../styles/style";

function Item({value, id, editable, complete}) {
    const dispatch = useDispatch();
    const items = useSelector(state => state.todo.items);
    const classes = useStyles();
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
        <ListItem alignItems='flex-start' className={classes.item}>
            <label className={classes.itemSpan}>
                <Checkbox onClick={onComplete} type="checkbox" checked={complete}/>
                {editable
                    ? <TextField className={classes.itemInput} type="text" value={val}
                                 onChange={e => setVal(e.target.value)}/>
                    : <b>{val}</b>}
            </label>
            <div className={classes.itemBtns}>
                <Button variant="contained" startIcon={<Mode/>} onClick={onEdite}> edit item</Button>
                <Button variant="outlined" color='error' startIcon={<Delete/>} onClick={onDelete}> delete</Button>
            </div>
        </ListItem>
    )
}

export default Item;