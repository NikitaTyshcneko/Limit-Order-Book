import {axiosInstance} from "../../../axios.js";
import {useLimitOrderBookDispatch} from "../../../context/LimitOrderBookContext.jsx";
import * as config from '../../../helpers/config.js';

export function UserMenu({isLoginMenuOpen}) {
    const dispatch = useLimitOrderBookDispatch();
    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        dispatch({ type: 'LOGIN', payload: false });
    };

    const links = {
        [config.links.stocks]: 'Stocks',
        [config.links.orders]: 'Orders',
        [config.links.transactions]: 'Transactions'
    };
    const menuItems = Object.entries(links).map(([path, label]) => <a href={path} key={path}>{label}</a>);

    return (
        <div className={`logout-menu-wrapper ${isLoginMenuOpen ? 'open' : ''}`}>
            {menuItems}
            <button className="logout-button" onClick={handleLogout}>Log Out</button>
        </div>
    );
}