import {useLimitOrderBookDispatch} from "./context/LimitOrderBookContext.jsx";
import { axiosInstance } from "./axios.js";
import {Header} from "./components/Header/Header.jsx";
import {Footer} from "./components/Footer/Footer.jsx";
import {useEffect} from "react";
import {Outlet} from "react-router-dom";
import * as config from './helpers/config.js';

export default App;

function App() {
    const dispatch = useLimitOrderBookDispatch();
    
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

    function onLoad() {
        config.authToken && dispatch({ type: 'LOGIN', payload: true });
        fetchStocks();
    }

    function fetchStocks() {
        axiosInstance.get(config.url.stocks)
            .then(response => response.data)
            .then(processFetchStocks);
    }

    function processFetchStocks(payload) {
        dispatch({
            type: 'SET_STOCKS',
            payload
        });
    }
}
