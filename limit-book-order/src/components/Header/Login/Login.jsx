import { LoginForm } from "./LoginForm.jsx";
import { UserMenu } from "./UserMenu.jsx";
import React, {useState} from "react";
import {useLimitOrderBook} from "../../../context/LimitOrderBookContext.jsx";

export function Login() {
    const appData = useLimitOrderBook();
    const [isLoginMenuOpen, setLoginMenuOpen] = useState(false);
    const toggleLoginMenu = () => setLoginMenuOpen(!isLoginMenuOpen);
    const dropdown = appData.isLogin
        ? <UserMenu isLoginMenuOpen={isLoginMenuOpen} />
        : <LoginForm isLoginMenuOpen={isLoginMenuOpen} />;

    return (
        <div className="login-wrapper">
            <span className="fas fa-user login-icon" onClick={toggleLoginMenu}></span>
            {dropdown}
        </div>
    );
}