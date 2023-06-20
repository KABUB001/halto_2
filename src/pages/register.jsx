
import '../styles/register.css'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Register(){
    const navigate = useNavigate()
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
       

            <div className='form1'>
                <div className="form-container">
                    <form action="form.php" method="post">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" className="form-control"/>
                        </div>  
                        <button type="submit">S'enregistrer</button>
                            Compte existant ? <a href="./login">Se connecter</a>
                    </form>
                </div>
            </div>      
        </>
    )
}
export default Register