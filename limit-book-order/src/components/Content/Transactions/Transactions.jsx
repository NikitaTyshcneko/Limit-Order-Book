import { useEffect } from 'react';
import { axiosInstance } from '../../../axios.js';
import * as config from '../../../helpers/config.js';

export { Transactions };

function Transactions() {
    useEffect(fetchTransactions, []);

    return 'transactions here';

    function fetchTransactions() {
        axiosInstance.get(config.url.transactions)
            .then(response => response.data)
            .then(processTransactionsResponse);
    }

    function processTransactionsResponse(payload) {
        console.log(payload)
    }
}