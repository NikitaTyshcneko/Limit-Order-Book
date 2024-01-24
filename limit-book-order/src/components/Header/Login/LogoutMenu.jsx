import {axiosInstance} from "../../../axios.js";
import {useLimitOrderBookDispatch} from "../../../context/LimitOrderBookContext.jsx";

export function LogoutMenu({isLoginMenuOpen}) {

    const dispatch = useLimitOrderBookDispatch();

    const handleLogout = () => {

        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        dispatch({type: 'LOGIN', payload: false});
        console.log(localStorage.getItem('access_token'))
    }

    return (
        <div className={`logout-menu-wrapper ${isLoginMenuOpen ? 'open' : ''}`}>
            <div className={"options"}>
                <div className={"option"}>
                    <span>Stocks</span>
                </div>
                <div className={"option"}>
                    <span>Orders</span>
                </div>
                <div className={"option"}>
                    <span>Transactions</span>
                </div>
            </div>
            <button className={"logout-button"} onClick={handleLogout}>Log Out</button>
        </div>
    );

}