import { Logo } from './Logo.jsx'
import { Account } from './Account/Account.jsx';

export function Header() {
    return (
        <div className="header-wrapper">
            <div className="header">
                <Logo />
                <Account />
            </div>
        </div>
    )
}