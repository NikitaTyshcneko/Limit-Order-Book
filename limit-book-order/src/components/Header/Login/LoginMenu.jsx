import {axiosInstance} from "../../../axios.js";
import {useLimitOrderBookDispatch} from "../../../context/LimitOrderBookContext.jsx";
import * as config from '../../../helpers/config.js';

export function LoginMenu({isLoginMenuOpen}) {
    const dispatch = useLimitOrderBookDispatch();

    return (
        <div className={`login-menu-wrapper ${isLoginMenuOpen ? 'open' : ''}`}>
            <form className={'login-menu-inputs'} onSubmit={handleLogin}>
                <input name="username" type="text" className="login-menu-input-text" placeholder="username"/>
                <input name="password" type="password" className="login-menu-input-text" placeholder="password"/>
                <div className="login-menu-login-button-and-error">
                    <button className="login-menu-login-button">Log In</button>
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
    }

    function processLoginFail(summary) {
        const message = summary.response.data.detail;
        alert(message);
    }
}