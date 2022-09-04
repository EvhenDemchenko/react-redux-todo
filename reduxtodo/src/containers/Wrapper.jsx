//Core
import {Provider} from "react-redux";
//Engine
import {store} from "../engine/init/store";
//Parts
import App from "./App";

function Wrapper() {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
}

export default Wrapper;