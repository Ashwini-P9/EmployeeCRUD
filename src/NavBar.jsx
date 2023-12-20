import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { CiViewList } from "react-icons/ci";
import  img from './Free_Sample_By_Wix (1).jpg';

const NavBar = () => {
  return (
    <>
       <nav className='navContainer'>
          <aside className='logoBlock'>
            <img src={img} alt="" height="70px" width="100px"/>
           
          </aside>
          <aside className='menuBlock'>
             <ul>
                <NavLink to="/"><li className='icon'><span>HOME</span>
                  <span><FaHome /></span></li></NavLink>
                <NavLink to="/addemp"><li  className='icon'> <span>ADD EMP</span><span><IoMdPersonAdd /></span></li></NavLink>
                <NavLink to="/viewall"> <li  className='icon'>VIEW ALL <span><CiViewList /></span></li></NavLink>
             </ul>
          </aside>
       </nav>
    </>
  )
}

export default NavBar