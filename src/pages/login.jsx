import { useEffect } from 'react'
import '../styles/login.css'
import { Route, Routes, useNavigate } from 'react-router-dom'


function Login(){
    const navigate = useNavigate()
    // useEffect((even)=>{
    //     const user = localStorage.getItem("user");
    //     if(user)navigate("/quizz")
    // },[])
    function submitForm(e){
        
        e.preventDefault()
        let data = Object.fromEntries(new FormData(e.target));
        let url = `http://localhost:4000/api/auth/login`
        fetch(url,{
            method: "POST",
            body: JSON.stringify(data)
        }
        ).then(response=>response.text())
         .then(response=>{console.log(response);
            
            if(response == "error"){
                alert("Votre compte n'existe pas, veuillez vous enregistrer")
            }else{
                console.log(response)
                localStorage.setItem("user", JSON.stringify(response));
                navigate("/quizz")
            }
            
            
         })
         .catch(error=>console.log(error))
    }
    
    return(
        <div className='body'>
            <div> onSubmit={submitForm} encType='multipart/form-data'</div>
        
            
    
            <div className="container">
        
                <div className="left"></div>
        
                <div className="right">
            
                    <div className="switchs">
                        <button className="switchlink" onclick="openForm(event, 'SignUp')" id="defaultOpen"> Sign Up</button>
                        <button className="switchlink" onclick="openForm(event, 'LogIn')">Log In</button>
                    </div>
           
                    <div className="switch-container">
                        <div id="SignUp" className="switchcontent">
                            <h1 className="title">Sign Up for Free</h1>
                            <form method='POST' name='SignUp' data-netlify="true">
                                <div className="field-wrap">
                                    <input name="Full name" type="text" id="name" required autocomplete="off" />
                                    <label htmlFor="name">Full Name</label>
                                </div>
                                <div className="field-wrap">
                                    <input name="email" type="email" id="email" required autocomplete="off" />
                                    <label htmlFor="email">Email Address</label>
                                </div>
                                <div className="field-wrap">
                                    <input name="password" type="password" id="password" required autocomplete="off" />
                                    <label htmlFor="password">Set A Password</label>
                                </div>
                                <button type="submit" className="actionbtn">Get started</button>
                            </form>
                        </div>
            
                        <div id="LogIn" className="switchcontent">
                            <h1 className="title">Welcome Back!</h1>
                            <form method='POST' name='login' data-netlify="true">
                                <div className="field-wrap">
                                    <input name="email" type="email" id="signInEmail" required autocomplete="off" />
                                    <label htmlFor="signInEmail">Email Address</label>
                                </div>
                                <div className="field-wrap">
                                    <input name="password" type="password" id="signInPswd" required autocomplete="off" />
                                    <label htmlFor="signInPswd">Password</label>
                                </div>
                                <p className="forgot"><a href="#">Forgot Password?</a></p>
                                <button type="submit" className="actionbtn">Log In</button>
                            </form>
                        </div>
               

                    </div>
           
                </div>
        
            </div>
      
            
            
        </div>
    )
}

export default Login