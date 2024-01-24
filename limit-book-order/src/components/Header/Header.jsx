import { Account } from "./Account/Account.jsx";

export function Header() {
    return (
        <div className="header-wrapper">
            <div className="header">
                <div className='header-logo'>
                    <span className={'header-logo-text'}>Limit Book Order</span>
                </div>
                <div className={"header-login"}>
                    <Account />
                </div>
            </div>
        </div>
    )
}