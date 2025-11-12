import { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/SignInForm.css'
import {useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../Slices/loginUserSlices'

function SignInForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {token} = useSelector((state) =>state.login)

    useEffect(() => {
        if(token) {
            navigate('/user')
        }
    }, [token, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        dispatch(loginUser({email, password}))
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input name="email" type="email" id="email"/>
            </div>
            <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" id="password"/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me" >Remember me</label>
          </div>
           <button type="submit" className="sign-in-button">SignIn</button>
        </form>
    )
}

export default SignInForm