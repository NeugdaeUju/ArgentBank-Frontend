import '../css/signin.css'
import SignInForm from '../Components/SignInForm'
import { FaCircleUser } from 'react-icons/fa6'
import Header from '../Components/Header.jsx'

function SignIn() {
    return (
         <>
         <Header title="Sign In"/>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <FaCircleUser className="form-icon"/>
                    <h1>Sign In</h1>
                    <SignInForm />
                </section>
            </main>
        </>
    )
}

export default SignIn