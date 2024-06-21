// src/components/AccountList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AccountList() {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        fetchAccounts();
    }, []);

    const fetchAccounts = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/accounts/');
            setAccounts(response.data);
        } catch (error) {
            console.error('Error fetching accounts:', error);
        }
    };

    return (
        <div>
            <h2>Accounts</h2>
            <ul>
                {accounts.map(account => (
                    <li key={account.id}>{account.account_number} - Balance: ${account.balance}</li>
                ))}
            </ul>
        </div>
    );
}

export default AccountList;
