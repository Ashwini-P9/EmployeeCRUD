//!to display content of indiviual employee

import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
 
 

const SingleEmp = () => {
    let [emp,setEmp]=useState(" ")  //!staring data of single emp

    //!navigating hook
let navigate=useNavigate()

  let previouspage =()=>{
   navigate(-1)
  }

//!useParam --used to acess data/parameter present in the url
    let {id}=useParams() 

    let getApi=async()=>{
    let {data}= await axios.get("http://localhost:5000/employee/"+id);  //!---------note:attacting id with Server
    console.log(data);
    setEmp(data)
    }

    useEffect(()=>{
      getApi();
    },[])
  return (
    <>
        <NavBar/>
        <button onClick={previouspage}></button>
        <section>
           <u><h1>Employee Details</h1></u>
             
            <h1>Id:{emp.id}</h1>
            <h1>Name:{emp.name}</h1>
            <h1>Email:{emp.email}</h1>
            <h1>Password:{emp.password}</h1>
        </section>
        <tr>
            <th>Id</th>
            <th>{emp.id}</th>
        </tr>
        <tr>
            <th>Name</th>
            <th>{emp.name}</th>
        </tr>
        <tr>
            <th>Email</th>
            <th>{emp.email}</th>
        </tr>
        <tr>
            <th>Password</th>
            <th>{emp.password}</th>
        </tr>
        

    </>
  )
}

export default SingleEmp


//!useEffect is hook to get data----
/*let getApi=()=>{

}*/
//to handle promise we r using fun,,, async, await
//pass url in this

//!useParams()---->used to access the data/parameter present in url-------http://localhost:3000/viewsingle/4
//*here  4 is id
//? id ----is parameter in url
//* in the form expression ,we have access that id ------let {id}=useParam()