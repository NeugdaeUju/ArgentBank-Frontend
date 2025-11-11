import Header from '../Components/Header.jsx'
import React from 'react'
import Account from '../Components/Account.jsx'
import '../css/transaction.css'

function Transaction() {
    return (
        <>
            <Header
            title="Tony"/>
            <main className="bg-dark">
                <Account 
                    title="Argent Bank Checking (x8349)"
                    price="$2,082.79"
                    balance="Available Balance"/>
            </main>
        </>
    )
}

export default Transaction