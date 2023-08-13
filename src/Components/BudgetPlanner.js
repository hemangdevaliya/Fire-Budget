import React, { useState, useEffect } from 'react';
// import { useCollectionData } from 'react-firebase-hooks/firestore';
// import firestore from 'firebase';
import {db,auth,firebase} from "./config"
import '../index.css'
import {  useNavigate } from 'react-router-dom';

const BudgetPlanner = () => {

const [data,setdata] = useState({})
const [dbData,setdbData] = useState({})
const [insertData,setInsertData] =  useState({})
const [Flag,setFlag] = useState(true)

const navigate=useNavigate();

useEffect(() => {
  (async () => {
    try {
setTimeout(async() => {
  const data = JSON.parse(localStorage.getItem('Data'))[0];
      setdata(data);
      const doc = await db.collection('users').doc(data.id).get();
      setdbData(doc.data());
      setFlag(false)
}, 50);

    setValues()
    } catch (error) {
      console.error(error);
    }
  })();


  console.log(dbData);
}, [Flag]);
      

const setValues = async () => {
  let spent = 0;

  if (dbData.expenses && Array.isArray(dbData.expenses)) {
    dbData.expenses.forEach((element) => {
      spent += Number(element.amount);
    });
await db.collection('users').doc(data.id).update({spent:spent}).then(async()=>{
await db.collection('users').doc(data.id).update({balance:Number(dbData.budget) - spent})

console.log(spent)
})
} else {
  console.error("dbData.expenses is not defined or is not an array.");
}

}

const deleteItem=async(item)=>{
  await db.collection('users').doc(data.id).update({expenses:firebase.firestore.
    FieldValue.arrayRemove(item)})
    alert("Data Deleted Successfully")
    setFlag(true)
  
}


const logout=()=>{
  alert('Logout Successful..')
  navigate('/login');
}
           
                                                  
const handleSubmit = async () =>{
          
let d1=document.getElementById("itemname").value;
let d2=document.getElementById("amt").value;

if(d1==''&&d2=='')
{
  alert('please enter data');
  return;
}
else if(d2>dbData.budget){
  alert('you cannot buy more than your budget amount.')
}
else{




 await db.collection('users').doc(data.id).update({expenses:firebase.firestore.
    FieldValue.arrayUnion({desc:insertData.desc,amount:insertData.Amt})})
    alert("Data Added Successfully")
    setFlag(true)
  }
  }


  return (
    <>
    {
    //  !dbData  ? <div>....Loading</div> :
     <>
   


      <div>
      <h1 style={{color:'black'}}>Budget Planner of {dbData.name}</h1><br></br>
      <br></br>
      <br></br>
      <div>
     <h2>Total Budget {dbData.budget}$</h2>

     </div>

<br></br>

<br></br>
      <button type="button" className='btn btn-dark m-2' onClick={logout}>Log Out</button>
      <br></br><br></br>
 
      
      <div className='box'>
        <div>
        <h3 style={{margin:20}}>Spent: </h3>   
        <p  class='money plus'>&nbsp;&nbsp;&nbsp; +{Number(dbData.spent)}$</p> 
        </div>

        <div>
        <h3 style={{margin:20}}>Balance: </h3>   
        <p class='money minus'> &nbsp;&nbsp;&nbsp; -{dbData.balance}$</p> 
        </div>

        </div>

        <form className='budget-form'>
      <div class="form-group">
        {/* <label>Budget:</label>
        
        <input type='number' className='form-control-budget' value={dbData.budget} readOnly/><br/>
        
        <br/> */}
        <label>Item Name:</label>
        <input
         className='form-control-budget'
         type="text"
          placeholder="Description"
          onKeyUp={(e)=> setInsertData({...insertData,desc:e.target.value})}
          id='itemname'
          required
        />
        
    <span style={{color:'red'}}>{}</span>

        <br/>
        <br/>
     <label> Enter Amount:</label>  
        <input
        className='form-control-budget'
          type="number"
          placeholder="Amount"
          onKeyUp={(e)=> setInsertData({...insertData,Amt:e.target.value})}
          id='amt'
          required
       />
        <span style={{color:'red'}}>{}</span>

        
        <br/>
        <br/>
        </div>
        <button type="button" className='btn btn-primary' onClick={handleSubmit}>Add Expense</button>

        <br></br><br></br>
        <div className='d-block'>

      
        
        </div>

      </form>
     
      <br></br><br></br>

      <span style={{color:'black',fontSize:20}}>Item Name</span>&nbsp;&nbsp;&nbsp;<span style={{color:'black',fontSize:20}}>Amount</span>
      <br></br>   
    {dbData && dbData.expenses && dbData.expenses.length  ?
    dbData.expenses.map((item)=> {
      return <>                 


    <div className='d-flex border col-sm-10 pe-4' style={{fontSize:20,borderRadius:'10px',marginBottom:'30px' ,boxShadow:'1px 2px 5px 4px lightgray'}}>
      
      <span className='badge badge-dark' style={{color:'black',backgroundColor:'lightgreen'}}>{item.desc}</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className='badge badge-primary' style={{color:'black',backgroundColor:'lightgray'}}>{item.amount}</span>
      {/* &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; */}
      <br></br>
      <button className='btn btn-danger' onClick={()=> deleteItem(item)} style={{width:100,height:50,marginLeft:50}}>Delete</button>
    </div>
    </>})
    : <> <p>No Data Found</p> </>}
                

    </div>
    </>
     }
    </>
  );
};

export default BudgetPlanner;