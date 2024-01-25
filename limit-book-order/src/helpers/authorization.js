export { 
    clearAuthTokens, 
    writeAuthTokens,
    readAuthToken
};

function writeAuthTokens(data) {
    Object.entries(data).forEach(([key, value]) => localStorage.setItem(`${key}_token`, value));
}

function clearAuthTokens() {
    ['access', 'refresh'].forEach(key => localStorage.removeItem(`${key}_token`));
}

function readAuthToken() {
    const storageKey = 'access_token';
    const accessToken = localStorage.getItem(storageKey);
    const authToken = accessToken
        ? 'Bearer ' + accessToken
        : null;

    return authToken;
}