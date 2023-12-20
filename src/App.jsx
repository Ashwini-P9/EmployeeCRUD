import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ViewAll from './ViewAll';
import AddEmp from './AddEmp';
import Layout from './Layout';
import Home from './Home';
import SingleEmp from './SingleEmp';
import Update from './Update';
import { Toaster} from 'react-hot-toast';

const App = () => {
  return (
    <>
       <div><Toaster position="top-right"
  reverseOrder={true}/></div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>        
          <Route index element={<Layout/>}/>  
          <Route path='/addEmp' element={<AddEmp/>}/>
          <Route path='/viewAll' element={<ViewAll/>}/>
          <Route path='viewsingle/:id' element={<SingleEmp/>}></Route>
          <Route path='/update/:id' element={<Update/>}/> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

//!based on id we r fetching data ----viewsingle/:id  
//<Route path='viewsingle/:id' element={<SingleEmp/>}></Route> --slug  --dynamically

//?To Navigate between pages
//!  after submitting form navigate to another page----useNavigate hook
//!  when u click on  some option then navigate use NavLink 


//***************************************** */
//! to add Toaster
//?npm add  react-hot-toast


//npm i react-icons
//import { FaHome } from "react-icons/fa";


//Add fav icon
//favicon