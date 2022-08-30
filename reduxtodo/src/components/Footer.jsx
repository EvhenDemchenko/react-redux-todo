import {useSelector} from "react-redux";

function Footer() {
    const items = useSelector((state) => {
        return state.todo.items
    })
    return (
        <footer>
            Кол-ство todo-items: <b> {items.length} </b>
        </footer>
    )
}

export default Footer;