
import '../styles/register.css'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import image1 from '../assets/image-1-accueil.png'
import FormRegisterPassager from '../components/formRegisterPassager'

function Register(){
    const [active1, setActive1] = useState("active");
    const [active2, setActive2] = useState("")
    const navigate = useNavigate()
    const activate1 = ()=>{
        if(active1 ===""){
            setActive1("active");
            setActive2('');
        }
            
    }
    const activate2 = ()=>{
        if(active2 ===""){
            setActive1("");
            setActive2("active")
        }
    }
    function submitForm(e){
            e.preventDefault()
            let data = Object.fromEntries(new FormData(e.target));
            

            let url = `http://localhost:4000/api/auth/register`
            fetch(url,{
                method: "POST",
                body: JSON.stringify(data)
            }
            ).then(response=>response.statusText)
             .then(response=>{
                console.log(response);
                navigate("/login")
            })
             .catch(error=>console.log(error))

    }

    

    return(
    <>
        <Navbar/>
        <div className="body">
            <div className='banner'>
                <span onClick={activate1} className={active1}>PASSAGER</span>
                <span onClick={activate2} className={active2}>CONDUCTEUR</span>   
            </div>  
            <div className='form_all' >
                    <img src={image1}/>
                    <FormRegisterPassager/>

                </div> 
                <button>ENREGISTRER</button>           
        </div>
    </>
    )
}
export default Register