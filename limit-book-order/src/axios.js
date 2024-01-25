import axios from 'axios';
import * as config from './helpers/config.js';
import * as auth from './helpers/authorization.js';

export { axiosInstance };

const headers = {
    Authorization: auth.readAuthToken(),
    'Content-Type': config.contentType,
    accept: config.contentType
};
const axiosConfig = {
    baseURL: config.url.api,
    timeout: config.requestTimeout,
    headers
};

const axiosInstance = axios.create(axiosConfig);