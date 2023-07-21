import React, { useState } from 'react'
// import {firebase} from './config'
// import {auth2 , app } from './config'
import './index.css'
import 'firebase/compat/auth'
import firebase from './config2'

export default function SignUp() {
    const [number,setNumber]=useState()
    // const [otp,setotp] = useState('')

    // console.log(number);


    /*
    const handleclick = () => {const DB = require("./config")
    let phone='+916356506249';
    console.log(phone);
        

   
    const Captcha = new DB.firebase.auth.RecaptchaVerifier('recaptcha-container')
    
    DB.firebase.auth().signInWithPhoneNumber(phone, Captcha)
        .then(function (confirmationResult) {
          // confirmationResult can resolve with the fictional testVerificationCode above.
          return confirmationResult.confirm(otp)
        }).catch(function (error) {
          // Error; SMS not sent
          // ...
        });
    }
*/
    
    const handleclick=()=>{



     
    let recaptcha=new firebase.auth.RecaptchaVerifier('recaptcha-container')

    let phone='+916356506249';
console.log(phone);
    


firebase.auth().signInWithPhoneNumber(phone,recaptcha).then(function(e){
        let code=prompt('Enter OTP','');
        if(code==null) return;
        e.confirm(code).then(function(result){
            console.log(result.user,'user');
            console.log('success');
            document.querySelector('label').textContent=result.user.phoneNumber+"Number Verified!.."
        }).catch((error)=>{
            console.log(error);
        })

  
    })
    }

 
// let recaptcha=new app.auth.RecaptchaVerifier('recaptcha');
// let phone='+91'+number
// app.auth.sign



  return (
    <>
    <h1>
        Sign Up Form
    </h1>

    <form className='sign-up'>
    <label></label>
        Enter Phone Numebr:
        &nbsp;&nbsp;&nbsp; 
   <input type='number' onChange={(e)=>setNumber(e.target.value)}></input>
   &nbsp;&nbsp;&nbsp; 
    <button  type='button' id='sign-in-button' onClick={handleclick}>Genrate OTP</button>


    
    </form>
    </>
  )
}
