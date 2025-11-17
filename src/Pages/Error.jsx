import { Link } from "react-router-dom"
import Header from '../Components/Header'
import '../css/error.css'

function Error() {
    return <>
        <Header />
        <div className="error_page">
            <h1 className="error_title">404</h1>
            <p className="error_text">Oops, this page is unavailable.</p>
            <Link to="/" className="error_link">Click here to return to the Home Page</Link>
        </div>
        </>
}

export default Error