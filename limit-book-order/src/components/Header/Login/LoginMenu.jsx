import {axiosInstance} from "../../../axios.js";
import {useLimitOrderBook, useLimitOrderBookDispatch} from "../../../context/LimitOrderBookContext.jsx";

export function LoginMenu({isLoginMenuOpen}) {
    const dispatch = useLimitOrderBookDispatch();

    const handleLogin = (event) => {
        event.preventDefault();

        axiosInstance.post('auth/jwt/create/', new FormData(event.target))
            .then(response => {
                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);
                axiosInstance.defaults.headers['Authorization'] =
                    'Bearer ' + localStorage.getItem('access_token');
                dispatch({ type: 'LOGIN',  payload: true });
            })
            .catch(error => console.error(error))

    }

    return (
        <div className={`login-menu-wrapper ${isLoginMenuOpen? 'open' : ''}`}>
            <form className={'login-menu-inputs'} onSubmit={handleLogin}>
                <input name={"username"} type="text" className={`login-menu-input-text`}
                       placeholder="username"/>
                <input name={"password"} type="password" className={`login-menu-input-text`}
                       placeholder="password"/>
                <div className={"login-menu-login-button-and-error"}>
                    <button className={"login-menu-login-button"}>Log In</button>

                </div>
            </form>
        </div>
    );
}