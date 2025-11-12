import { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/SignInForm.css'
import {useDispatch, useSelector } from 'react-redux'
import { loginLocal } from '../Slices/loginUserSlices'

function SignInForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) =>state.users)

    useEffect(() => {
        if(currentUser) {
            navigate('/user')
        }
    }, [currentUser, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        dispatch(loginLocal({email, password}))
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="email">Username</label>
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
           <button type="submit" className="sign-in-button">Sign In</button>
        </form>
    )
}

export default SignInForm