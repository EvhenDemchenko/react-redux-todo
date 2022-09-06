import {createUseStyles} from "react-jss";

export const useStyles = createUseStyles({
    App: {
        fontFamily:'system-ui',
        boxSizing:"border-box",
        boxShadow:'1px 2px 3px 5px lightgray',
        marginTop:'20px',
        padding: '10px ',
        borderRadius:'3px'

    },
    btnContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    formContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:"space-between"
    },
    formBtn: {
        height: '56px !important'
    },
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        borderBottom:'1px solid gray',
        boxShadow:'0px 1px 1px 0px gray',
        marginBottom: '15px'
    },
    itemSpan: {
        display: 'flex',
        alignItems: 'center',
    },
    itemInput: {
        padding: '0px',
    },
    SearchContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    itemBtns: {
        display:'flex',
        gap:'10px'
    },
    formInner: {
        display:'flex',
        gap:'10px'
    }
})