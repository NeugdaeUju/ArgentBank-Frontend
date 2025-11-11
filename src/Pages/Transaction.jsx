import Header from '../Components/Header.jsx'
import React from 'react'
import Account from '../Components/Account.jsx'
import '../css/transaction.css'
import DropDown from '../Components/DropDown.jsx'

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
                <section>
                    <DropDown
                        date="27/02/20"
                        description="Golden Sun Bakery"
                        amount="$8.00"
                        balance="$298.00"/>
                </section>
            </main>
        </>
    )
}

export default Transaction