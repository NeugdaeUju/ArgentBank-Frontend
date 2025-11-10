import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home.jsx'
import SignIn from './Pages/SignIn.jsx'
import User from './Pages/User.jsx'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/user" element={<User />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
  )
}

export default App


/*
<div>
      <h1>Vite + React</h1>
      </div>
*/