import '../css/signin.css'
import SignInForm from '../Components/SignInForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

function SignIn() {
    return (
         <>
            <main className="bg-dark">
                <section className="sign-in-content">
                    <FontAwesomeIcon icon={faCircleUser} className="form-icon"/>
                    <h1>Sign In</h1>
                    <SignInForm />
                </section>
            </main>
        </>
    )
}

export default SignIn