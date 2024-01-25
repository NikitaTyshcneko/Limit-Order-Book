import {axiosInstance} from "../../../axios.js";
import {useLimitOrderBookDispatch} from "../../../context/LimitOrderBookContext.jsx";
import * as config from '../../../helpers/config.js';
import * as auth from '../../../helpers/authorization.js';

export function UserMenu({ opener }) {
    const dispatch = useLimitOrderBookDispatch();
    const handleLogout = () => {
        auth.clearAuthTokens();
        axiosInstance.defaults.headers['Authorization'] = null;
        dispatch({ type: 'LOGIN', payload: false });
        opener(false);
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