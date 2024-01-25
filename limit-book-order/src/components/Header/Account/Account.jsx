import { LoginForm } from "./LoginForm.jsx";
import { UserMenu } from "./UserMenu.jsx";
import React, {useState} from "react";
import {useLimitOrderBook} from "../../../context/LimitOrderBookContext.jsx";

export function Account() {
    const appData = useLimitOrderBook();
    const [isLoginMenuOpen, setLoginMenuOpen] = useState(false);
    const toggleLoginMenu = () => setLoginMenuOpen(!isLoginMenuOpen);
    const dropdown = appData.isLogin
        ? <UserMenu />
        : <LoginForm />;

    return (
        <div className="account">
            <span className="account-button fas fa-user" onClick={toggleLoginMenu}></span>
            <div className={`account-dropdown ${isLoginMenuOpen ? 'open' : ''}`}>
                {dropdown}
            </div>
        </div>
    );
}