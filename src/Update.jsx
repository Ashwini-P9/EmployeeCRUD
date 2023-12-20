import React,{useEffect, useState} from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

const Update = () => {
  let [emp,setEmp]=useState({
    name:"",
    email:"",
    password:""
  })

  let navigate = useNavigate()
  
  let previouspage =()=>{
   navigate(-1)
  }
  
  let {name,email,password} = emp;
//!----------
  let{id}=useParams()
  console.log(id);
  let getApi=async ()=>{
    /* let a =await axios.get("http://localhost:5000/employee/"+id);//!axios return promise
     console.log(a);*/ //!in data key,value is stored

     let {data} =await axios.get("http://localhost:5000/employee/"+id);//!axios return promise
     console.log(data);
    setEmp(data)  //!it will display previous data
  }  


  useEffect(()=>{
    getApi()
  },[])  



  let handleChange=(e)=>{
    console.log(e);
  let {name,value}=e.target;
    setEmp({...emp,[name]:value})
  }

  let handleSubmit=(e)=>{
 //!validation
     if (name === "" && email === "" && password === "") {
      alert("please enter All fields")
     }
     else{
      e.preventDefault()
      console.log(emp);
 try{
  let payload={    
    name,email,password
  } 
 axios.put("http://localhost:5000/employee/"+id,payload);  //!through id we r updating
 toast.success('Successfully updated!👍') 
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
      <button onClick={previouspage}>Go back</button>
      <div className='addEmp'> 
       <div><span>Name:<input type="text" placeholder='Enter Your name' value={name} name='name' onChange={handleChange}/></span></div>
       <div><span>Email:</span><input type="email" placeholder='Enter Your email' value={email} name='email' onChange={handleChange}/></div>
       <div><span>Password:</span><input type="password" placeholder='Enter Your password' value={password} name='password' onChange={handleChange}/></div>
       <div><button onClick={handleSubmit}>Update Employee</button></div>
       </div>
    </>
  )
}

export default Update;

//!Structure of addEmp and update is same