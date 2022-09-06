//Core
import {useDispatch} from "react-redux";
import {useState} from "react";
//Engine
import {onAddItem} from "../engine/core/thunk/thunks"
//Styles
import {useStyles} from "../styles/style";
import {Button} from "@mui/material";
import {TextField} from "@mui/material";
import {setCompleted} from "../engine/core/todo/slice";
import {ButtonGroup} from "@mui/material"
//Icons
import {Send} from '@mui/icons-material';
import {Done} from '@mui/icons-material'

export default function Form() {
    const [val, setVal] = useState('');
    const dispatch = useDispatch();
    const classes = useStyles();

    const onAddToRedux = () => {
        dispatch(onAddItem(val, setVal))
    }
    const onCompletedItems = () => {
        dispatch(setCompleted('completed'))
    }
    const onAllItems = () => {
        dispatch(setCompleted('all'))
    }
    const setInputValue = e => setVal(e.target.value);
    const preventSubmit = e => e.preventDefault();

    return (
        <div className={classes.formContainer}>
            <form className={classes.formInner} onSubmit={preventSubmit}>
                <TextField label="New task for today..." variant="filled" value={val} onChange={setInputValue}
                           type="text"/>
                <Button type='submit' className={classes.formBtn} variant="contained" endIcon={<Send/>}
                        onClick={onAddToRedux}> add
                    todo</Button>
            </form>
            <ButtonGroup variant="contained" className={classes.btnContainer}>
                <Button className={classes.formBtn} onClick={onCompletedItems} endIcon={<Done/>}>
                    show completed
                </Button>
                <Button className={classes.formBtn} onClick={onAllItems}>
                    show all
                </Button>
            </ButtonGroup>
        </div>
    )
}