import React, { useRef, useState } from 'react'
import '../assets/styles/loginpage.css'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  let inputRef = useRef()

   const navigate = useNavigate()

  let [emailErr, setEmailerr] = useState('')
  let [pswdErr, setPswderr] = useState('')


   let err = `
            Background:rgba(255, 0, 0, 0.339);
            border: 1px solid red;
            box-shadow : 0px 0px 10px red;
            `


  let handleSubmit = (e)=>{
    e.preventDefault()

    let emailField = inputRef.current[0]   
    let pswdField = inputRef.current[1]

    let credential = {
            email : "manju@gmail.com",
            passward : 'manju123'
      }

    let {email,passward} = credential

    let checkEmail = (emailField.value === email)
    let checkPswd = (pswdField.value === passward)

    if(checkEmail && checkPswd){
      navigate('/loginportal')    

    }

    else {
      
    if(emailField.value === "" || emailField.value === null){
                emailField.style.cssText = err
                setEmailerr('Email field is empty')            
    }
    else if(pswdField.value === "" || pswdField.value === null){
                pswdField.style.cssText = err
                setPswderr('Passward field is empty')
            }
            else if(emailField.value !== email){
                emailField.style.cssText = err
                setEmailerr('Invalid email adrress')

            }
            else if(pswdField.value !== passward){
                pswdField.style.cssText = err
                setPswderr('Invalid passward')
            }
  }   
    
    
  }

  
  

  return (
    <div className="loginpage">
      <div className="container">
        
         <form action=""  onSubmit={handleSubmit} ref={inputRef} >
           <div className="inp-btns">
            <input type="email" placeholder='manju@gmail.com'/>
            <span>{emailErr}</span>
            <input type="password" placeholder='manju123'/>
            <span>{pswdErr}</span>
          </div>
          <div className="submit-btn">
            <button>Submit</button>
          </div>
         </form>
          
          
        
      </div>
    </div>
  )
}

export default LoginPage