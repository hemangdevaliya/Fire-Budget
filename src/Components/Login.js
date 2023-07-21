import React,{useState,useEffect} from 'react'
import '../index.css'
import { useNavigate } from 'react-router-dom';
import BudgetPlanner from './BudgetPlanner';

import {db,auth2} from './config'

 


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data,setdata] =  useState([])

    useEffect(()=>{
     
     setTimeout(async () => {
       let array = await db.collection('users').get().then((snapshot) => snapshot.docs.map((doc) => doc.data())).then((result) => result)
       setdata(array)
     }, 50);
    },[])

    let nav=useNavigate()
    const handleLogin = async () => {
      try {
        const userCredential = await auth2.signInWithEmailAndPassword(email, password);
        // Handle successful login
        console.log(userCredential.user);
        alert('Authenticate User');
        console.log("data>>>>>>>>>>",data);
        nav('/home')
        console.log("USER>>>>>>>>>>>>",email,data.filter((item) => {return item['email'] == email}))
        localStorage.setItem("Data",JSON.stringify(data.filter((item) => {return item['email'] == email})))
        return
      } catch (error) {
        // Handle login error
        alert('Invalid User')
        console.error(error);
      }
    };


  return (
    <div className='back-login'>
    <h1 className='login-head'> Login </h1>



<form className='login'>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>&nbsp;&nbsp;
    <br></br>
    <input type="email" class="login-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"   onChange={(e) => setEmail(e.target.value)}/>
  
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>&nbsp;&nbsp;
    <br></br>
    <input type="password" class="login-control" id="exampleInputPassword1" placeholder="Password"   onChange={(e) => setPassword(e.target.value)}/>
  </div>
  <br>
  </br>
  <button type="button" class="btn btn-primary" onClick={handleLogin}>Log in</button>
  <button type="button" class="btn btn-success ms-1"  onClick={()=>nav('/')}>SignUp</button>

</form>
</div>
  )
}
