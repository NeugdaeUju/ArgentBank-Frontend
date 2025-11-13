import '../css/account.css'

function Account ({ title, price , balance, button }) {
    return (
        <>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">{title}</h3>
                    <p className="account-amount">{price}</p>
                    <p className="account-amount-description">{balance}</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">{button}</button>
                    </div>
            </section>
        </>
    )
}

export default Account;