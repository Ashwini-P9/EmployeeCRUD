import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'

import toast from 'react-hot-toast'

 
const ViewAll = () => {
  let [emp,setEmp]=useState([]) //after getting data from we want to display
  
  let getApi = async() =>{
    let {data}= await axios.get("http://localhost:5000/employee")
    console.log(data);
    setEmp(data);
  }

  //!Navigate hook

  let navigate=useNavigate()

  let previouspage =()=>{
   navigate(-1)
  }

  //!useEffect is best place
  useEffect(()=>{
    getApi()
  },[])


  //!delete
  let deleteEmp =(id)=>{
     axios.delete("http://localhost:5000/employee/"+id);
     toast.success('Successfully deleted!👍') 
     window.location.assign('/viewall');                  //!using this we can access location
  }                                                       //?sometime useEffect is not works,that's why this javascript method


console.log(emp);
  return (
    <>
    
        <NavBar/> 
        <button onClick={previouspage}>Go Back</button>
        <u><h1 className='tableheading'>All EmployeeDetails📑</h1></u>
         <table className='tableContainer'>
          <thead>
           <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th colSpan={3}>OPTIONS</th>
           </tr>
          </thead>
          <tbody>
            {emp.map((x,ind)=>{
                return (
                  <tr key={x.id}>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.email}</td>
                         
                    <td><NavLink to={`/viewsingle/${x.id}`}><button>View More</button></NavLink></td>


                    <td><NavLink to={`/update/${x.id}`}><button>Update</button></NavLink></td>

                    
                    <td><button onClick={()=>deleteEmp(x.id)}>Delete</button> </td>
                  </tr>
                )
            })}
          </tbody>
         </table>
    </>
  )
}

export default ViewAll

//We getting promise

//! when we click on this we get data of single emp
//? <td><NavLink to={`/viewsingle/${x.id}`}><button>View More</button></NavLink></td>
//*    use template String  --along with character
//! based on id  we r navigating beteen page

//!display Content
//*SingleEmp


//!delete
//?why arrow fun
//*if we wn't take it keep on calling the fun-------  id is passing as argument


