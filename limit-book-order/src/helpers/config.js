export {
    url,
    requestTimeout,
    authToken,
    contentType,
    links,
    rootDir,
    logoUrl,
    title
};

const url = {
    base: document.location.origin,
    api: 'http://127.0.0.1:8000/api/v1/',
    jwtAuth: 'auth/jwt/create/',
    stocks: '/stocks/',
    orders: '/orders/',
    transactions: 'transactions'
};
const requestTimeout = 5000;
const authToken = getAuthToken();
const contentType = 'application/json';
const links = {
    stocks: '/',
    orders: 'orders',
    transactions: 'transactions'
};
const rootDir = `${url.base}/src`;
const logoUrl = `${rootDir}/images/react.svg`;
const title = {
    site: 'Limit Book Order'
};

function getAuthToken() {
    const storageKey = 'access_token';
    const accessToken = localStorage.getItem(storageKey);
    const authToken = accessToken
        ? 'Bearer ' + accessToken
        : null;

    return authToken;
}