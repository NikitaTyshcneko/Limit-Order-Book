import {axiosInstance} from "../../../axios.js";
import {useLimitOrderBookDispatch} from "../../../context/LimitOrderBookContext.jsx";
import { useState } from "react";
import * as config from '../../../helpers/config.js';

export function LoginForm({ isLoginMenuOpen }) {
    const dispatch = useLimitOrderBookDispatch();
    const [loginStatus, setLoginStatus] = useState({ ok: true });

    return (
        <div className={`login-menu-wrapper ${isLoginMenuOpen ? 'open' : ''} ${loginStatus.ok ? '' : 'error'}`}>
            <form className="login-menu-inputs" onSubmit={handleLogin}>
                <input name="username" type="text" className="login-menu-input-text" placeholder="username" required/>
                <input name="password" type="password" className="login-menu-input-text" placeholder="password" required />
                <div className="login-menu-login-button-and-error">
                    <button className="login-menu-login-button">Log In</button>
                    {loginStatus.ok || <div className="login-menu-error">{loginStatus.message}</div> }
                </div>
            </form>
        </div>
    );

    function handleLogin(event) {
        const form = event.target;
        const formData = new FormData(form);

        event.preventDefault();
        axiosInstance.post(config.url.jwtAuth, formData).then(processLogin, processLoginFail);
    };
    
    function processLogin(response) {
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        axiosInstance.defaults.headers['Authorization'] = config.authToken;
        dispatch({ type: 'LOGIN', payload: true });
        setLoginStatus({ ok: true });
    }

    function processLoginFail(summary) {
        const message = summary.response.data.detail;
        setLoginStatus({ ok: false, message });
    }
}