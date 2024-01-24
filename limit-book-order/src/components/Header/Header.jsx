import {Login} from "./Login/Login.jsx";

export function Header() {
    return (
        <div className="header-wrapper">
            <div className="header">
                <div className='header-logo'>
                    <span className={'header-logo-text'}>Limit Book Order</span>
                </div>
                <div className={"header-login"}>
                    <Login/>
                </div>
            </div>
        </div>
    )
}