import React from 'react'
import '../css/user.css'
import Account from '../Components/Account.jsx'

function User () {
    return (
        <>
        <main className="bg-dark">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account 
                title="Argent Bank Checking (x8349)"
                price="$2,082.79"
                balance="Available Balance"/>
            <Account 
                title="Argent Bank Savings (x6712)"
                price="$10,928.42"
                balance="Available Balance"/>
            <Account 
                title="Argent Bank Credit Card (x8349)"
                price="$184.30"
                balance="Current Balance"/>
        </main>
        </>
    )
}

export default User