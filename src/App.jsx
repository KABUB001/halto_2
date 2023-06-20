import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Login from './pages/login.jsx'
import Register from './pages/register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/register'} element={<Register/>}/>
      </Routes>     
    </>
  )
}

export default App
