import {useLimitOrderBookDispatch} from "./context/LimitOrderBookContext.jsx";
import {Header} from "./components/Header/Header.jsx";
import {Footer} from "./components/Footer/Footer.jsx";
import {useEffect} from "react";
import {Outlet} from "react-router-dom";
import * as config from './helpers/config.js';

export default App;

function App() {
    const dispatch = useLimitOrderBookDispatch();
    const onLoad = () => config.authToken && dispatch({ type: 'LOGIN', payload: true });

    useEffect(onLoad, []);

    return (
        <>
            <Header/>
            <div className="content">
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
}
