import {useLimitOrderBookDispatch} from "./context/LimitOrderBookContext.jsx";
import {Header} from "./components/Header/Header.jsx";
import {Footer} from "./components/Foorter/Footer.jsx";
import {useEffect} from "react";
import {Outlet} from "react-router-dom";

function App() {
    const dispatch = useLimitOrderBookDispatch();

    useEffect(() => {
        if (localStorage.getItem('access_token')) {
            dispatch({type: 'LOGIN', payload: true})
        }
    }, []);

    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default App
