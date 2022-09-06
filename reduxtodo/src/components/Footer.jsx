import {useSelector, useDispatch} from "react-redux";
import {onRemoveAllItems} from '../engine/core/thunk/thunks';
import Selectors from "../engine/init/selectors";
//Style
import {Button} from "@mui/material";
//Icons
import {Delete} from '@mui/icons-material';

function Footer() {
    const items = useSelector(Selectors.memoItems)
    const dispatch = useDispatch();

    const onDelete = () => {
        dispatch(onRemoveAllItems());
    }
    return (
        <footer>
            Кол-ство todo-items: <b> {items.length} </b>
            <br/>
            <Button size='large' color='error' variant="contained" endIcon={<Delete/>} onClick={onDelete}> delete
                all</Button>
        </footer>
    )
}

export default Footer;