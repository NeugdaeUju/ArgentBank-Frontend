import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home.jsx'
import SignIn from './Pages/SignIn.jsx'
import User from './Pages/User.jsx'
import Footer from './Components/Footer.jsx'
import { useSelector } from 'react-redux'
import Error from './Pages/Error.jsx'

function App() {
  const token = useSelector((state) => state.auth.token);

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/user" element={token ? <User /> : <SignIn/>} />    
          <Route path="/*" element={<Error/>} />
        </Routes>
      <Footer/>
      </BrowserRouter>
  )
}

export default App