import React, { useState } from 'react'
import '../index.css'

import { db, auth2 } from './config'
import { useNavigate } from 'react-router-dom';
import Backimg from '../Components/sign-up-image1_300.jpg'
export default function Signup2() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validflag, setvalidflag] = useState(true)
  const [validate, setvalidate] = useState({})
  const [name, setName] = useState('')
  let nav = useNavigate()
  const handleSignUp = async () => {
    try {

      if (!Validation()) {
        return
      }
      const userCredential = await auth2.createUserWithEmailAndPassword(email, password).then(() => {
        let docref = db.collection('users').doc()
        let id = docref.id
        db.collection('users').doc(id).set({
          id: id,
          name: name,
          email: email,
          createdAt: (new Date()).toUTCString(),
          budget: 0,
          spent: 0,
          balance: 0,
          expenses: []
        }).then((res) => {
          console.log("res>>>>>>", res);
        })

      });
      // Handle successful registration
      alert('Sign up sccessful..!')
      nav('/login')
      setEmail('');
      setPassword('');

      return


    } catch (error) {
      // Handle registration error
      alert(error)
    }
  };

  const Validation = () => {
    let flag = true
    let obj = validate

    if (!name) {
      obj['nameError'] = "name is required"
      setvalidate(obj)
      flag = false
    }
    if (!password || password.length < 6) {
      obj['passwordError'] = "please enter valid password"
      setvalidate(obj)
      flag = false

    }
    if (!email) {
      obj['emailError'] = "Email field is required"
      setvalidate(obj)
      flag = false

    }
    if (!(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email))) {
      obj['emailError'] = "please enter valid email"
      setvalidate({ ...validate, })
      flag = false

    }


    return flag
  }


  return (
    <>

      <div className='back-sign'>
       <img src={Backimg} className='bg-img' alt='Backgorud image'/>
        {/* <h1 className='sign-head'> Sign Up </h1> */}
    




        <form className='sign-up'>

          <h1 className='sign-head'> Sign Up </h1>
          <div class="form-group" style={{ width: '100% !important' }}>
            <label for="exampleInputEmail1">Full Name</label>
            <input type="text" class="form-control  " id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)} placeholder="Enter Full name" />
            <span>{validate.nameError}</span>
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
            <span>{validate.emailError}</span>

          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control " id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <span>{validate.passwordError}</span>

          </div>
          <br>
          </br>
          <button type="button" class="btn btn-success" onClick={handleSignUp}>SignUp</button>&nbsp;&nbsp;&nbsp;
          <button type="button" class="btn btn-primary ms-1" onClick={() => nav('/login')}>Login</button>
        </form>
      </div>
    </>
  )
}
