import '../css/account.css'
import { Link } from 'react-router-dom'

function Account ({ title, price , balance, button, link }) {
    return (
        <>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">{title}</h3>
                    <p className="account-amount">{price}</p>
                    <p className="account-amount-description">{balance}</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button"><Link to={link}>{button}</Link></button>
                    </div>
            </section>
        </>
    )
}

export default Account;