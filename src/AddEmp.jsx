import React,{useState} from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

const AddEmp = () => {
  let [emp,setEmp]=useState({
    name:"",
    email:"",
    password:""
  })

   //!Navigate hook
  let navigate=useNavigate()

  let previouspage =()=>{
   navigate(-1)
  }
  
  let {name,email,password} = emp;

  let handleChange=(e)=>{
    console.log(e);
  let {name,value}=e.target;
    setEmp({...emp,[name]:value})
  }

   

  let handleSubmit=(e)=>{
 //!validation
     if (name === "" && email === "" && password === "") {
      alert("Please Enter all Fields")
     }
     else if(name === "" && email === ""){
       alert("Name And Email is mandatory")
     }
     else{
      e.preventDefault()
      console.log(emp);
     
  
  try{
  let payload={    
    name,email,password
  } 
 axios.post("http://localhost:5000/employee",payload);
 toast.success('Successfully Added!👍')  //!note
 navigate("/viewall");
} catch(e){
  console.log(e);
}
finally{        //!once we send data to server ,set emp var with empty String
   setEmp({
     name:"",
     email:"",
     password:""
   });
}
  }}


  
  return (
    <  >
      <NavBar/>
      <button onClick={previouspage}>Go Back</button>
      <h2 className='add'>Add a Employee</h2>
      <div className='addEmp'> 
       <div><span>Name:<input type="text" placeholder='Enter Your name' value={name} name='name' onChange={handleChange} required/></span></div>
       <div><span>Email:</span><input type="email" placeholder='Enter Your email' value={email} name='email' onChange={handleChange} required/></div>
       <div><span>Password:</span><input type="password" placeholder='Enter Your password' value={password} name='password' onChange={handleChange} required/></div>
       <div><button onClick={handleSubmit}>Add Employee</button></div>
       </div>
    </>
  )
}

export default AddEmp




//data is stored instate form
//!taking data in the form of object
//!in the form key and value bcoz we have multiple input field

//?instead of writing object  
/*name:"",
email:"",
password:""*/
//!we  r using destructre--->destructing

//*destructing-->let{name,email,password}=emp;
//!we have to connect input tag and state
//?we can access using value attribute
//value={name}
//value={email}
//value={password}


//!inorder to differntiate between input tag ---3
//?name attribute

//synthetic event--->e -->all  the event related to browswer

/*
 let {name,value}=e.target;
    setEmp({})
*/ //!name is act as key,value is act is value of data
//? setEmp({[name]:value})


//!onSubmit event-----on submitting we have to get data
//?onSubmit={handleSubmit}
//*inorder to prevent default behavoiur of form
//!when we add new data ,new value will overridden the odd value
//*SOLUTION---- use spread operator (...emp)
//? setEmp({...emp,[name]:value})


//to send http request install----install 
//--->npm install axios