import * as config from '../../helpers/config.js';
export { Logo };

function Logo() {
    return (
        <a className='logo' href={config.url.base} title={config.title.site}>
            <img className='logo-image' src={config.logoUrl} alt={config.title.site} />
        </a>
    );
}