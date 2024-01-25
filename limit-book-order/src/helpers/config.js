export {
    url,
    requestTimeout,
    contentType,
    links,
    rootDir,
    logoUrl,
    title
};

const url = {
    base: document.location.origin,
    api: 'http://localhost:8000/api/v1/',
    jwtAuth: 'auth/jwt/create/',
    stocks: '/stocks/',
    orders: '/orders/',
    transactions: 'transactions'
};
const requestTimeout = 5000;
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
