import { useState } from 'react'
import Navbar from './components/Navbar'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Login from './pages/login.jsx'
import Register from './pages/register'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Navbar/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/register'} element={<Register/>}/>
      </Routes>     
    </>
  )
}

export default App
