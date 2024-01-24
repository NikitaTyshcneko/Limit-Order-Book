export {
    url,
    requestTimeout,
    authToken,
    contentType
};

const url = {
    base: 'http://127.0.0.1:8000/api/v1/',
    jwtAuth: 'auth/jwt/create/',
    stocks: '/stocks/'
};
const requestTimeout = 5000;
const authToken = getAuthToken();
const contentType = 'application/json';

function getAuthToken() {
    const storageKey = 'access_token';
    const accessToken = localStorage.getItem(storageKey);
    const authToken = accessToken
        ? 'Bearer ' + accessToken
        : null;

    return authToken;
}