import {useEffect} from 'react';
import {useDispatch , useSelector} from 'react-redux'
import '../css/user.css'
import Account from '../Components/Account.jsx'
import Header from '../Components/Header.jsx'
import EditNameButton from '../Components/EditNameButton.jsx'
import {userProfile} from '../Slices/userSlice.js'

function User () {
    const dispatch = useDispatch();;
    const user = useSelector((state) => state.user.info)
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        if (token) {
        dispatch(userProfile(token))
        }
    }, [token, dispatch])

    return (
        <>
        <Header
        title="Tony"/>
        <main className="bg-dark">
            <div className="header">
                <h1>Welcome back<br />{user ? `${user.firstName} ${user.lastName}` : "Tony" }</h1>
                <EditNameButton/>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account 
                title="Argent Bank Checking (x8349)"
                price="$2,082.79"
                balance="Available Balance"
                button="View transactions"
                link="/user/transaction"/>
            <Account 
                title="Argent Bank Savings (x6712)"
                price="$10,928.42"
                balance="Available Balance"
                button="View transactions"
                link="/user/transaction"/>
            <Account 
                title="Argent Bank Credit Card (x8349)"
                price="$184.30"
                balance="Current Balance"
                button="View transactions"
                link="/user/transaction"/>
        </main>
        </>
    )
}

export default User