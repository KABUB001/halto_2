import { useEffect } from 'react'
import '../styles/login.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import NavBar from '../components/Navbar'


function Login(){
    const navigate = useNavigate()
   
    function submitForm(e){   
        e.preventDefault()
        
    }
    
    return(
        <div><NavBar/></div>
    )
}

export default Login