import { useLimitOrderBook, useLimitOrderBookDispatch } from "./context/LimitOrderBookContext.jsx";
import { axiosInstance } from "./axios.js";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { LoginPrompt } from './components/content/LoginPrompt.jsx';
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import * as config from './helpers/config.js';

export default App;

function App() {
    const appData = useLimitOrderBook();
    const authenticated = appData.isLogin;
    const dispatch = useLimitOrderBookDispatch();
   
    useEffect(onLoad, []);

    return (
        <>
            <Header/>
                <div className="content">
                    { 
                        authenticated
                            ? <Outlet />
                            : <LoginPrompt />
                    }
                </div>
            <Footer/>
        </>
    );

    function onLoad() {
        const loggedIn = config.authToken;

        if (loggedIn) {
            dispatch({ type: 'LOGIN', payload: true });
            fetchStocks();
        }
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
