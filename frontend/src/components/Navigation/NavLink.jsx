import React from 'react'
import { Album, BookCheck, Database, FileCheck, FileUp, Home, Icon, icons, Settings, ShieldCheck } from "lucide-react";
import { NavLink as RouterNavLink, useLocation, useNavigate, } from "react-router";
import { useDispatch } from 'react-redux';


const navlink = [
  {label:"Dashboard", icon:Home, to:"/home"},
  {label:"My Courses", icons:BookCheck, to:"/home/my-courses"},
  {label:"My Internship", icons:Album, to:"/home/my-internship"}
]


const NavLink = () => {


  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <>
    <section>
      
      <div>
        {navlink.map(({label, icon: Icon, to}, Idx)=>{
          return(
            <RouterNavLink
            key={label}
            to={to}
            >
              <div className='flex' >
                {/* <Icon /> */}
              <span>{label}</span>
              </div>
            </RouterNavLink>
          )
        })}
      </div>

      <div>
        <button className='text-red-500' >Logout</button>
      </div>
    </section>
    </>
  )
}

export default NavLink;