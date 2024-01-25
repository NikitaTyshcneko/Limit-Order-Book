import {axiosInstance} from "../../../axios.js";
import {useLimitOrderBookDispatch} from "../../../context/LimitOrderBookContext.jsx";
import * as config from '../../../helpers/config.js';

export function UserMenu() {
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
    const renderer = ([path, label]) => <a className="user-link" href={path} key={path}>{label}</a>;
    const menuItems = Object.entries(links).map(renderer);

    return (
        <div className="user-menu">
            {menuItems}
            <div className="user-link" onClick={handleLogout}>Log Out</div>
        </div>
    );
}