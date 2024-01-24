import {LoginMenu} from "./LoginMenu.jsx";
import React, {useState} from "react";
import {LogoutMenu} from "./LogoutMenu.jsx";
import {useLimitOrderBook} from "../../../context/LimitOrderBookContext.jsx";

export function Login() {
    const appData = useLimitOrderBook();
    const [isLoginMenuOpen, setLoginMenuOpen] = useState(false);
    const toggleLoginMenu = () => setLoginMenuOpen(!isLoginMenuOpen);
    const loginForm = appData.isLogin
        ? <LogoutMenu isLoginMenuOpen={isLoginMenuOpen} />
        : <LoginMenu isLoginMenuOpen={isLoginMenuOpen} />;

    return (
        <div className={"login-wrapper"}>
            <span className="fas fa-user login-icon" onClick={toggleLoginMenu}></span>
            {loginForm}
        </div>
    );
}