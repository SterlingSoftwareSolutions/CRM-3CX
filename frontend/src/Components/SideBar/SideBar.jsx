import React from 'react'
import { NavLink } from 'react-router-dom'
import {Dashboard, Person, Phone } from '@mui/icons-material'
import { FaUser } from 'react-icons/fa';
const SideBar = ({children}) => {
  const menuItem=[
    {
      path:"/",
      name:"Dashboard",
      icon: <Dashboard/>
    },

    {
      path:"/calls",
      name:"Calls",
      icon: <Phone/>
    },

    {
      path:"/Agents",
      name:"Agents",
      icon: <Person/>
    },

  ]
  return (
    <div className='container'>
      <div className="sidebar">
        <div className="top_section">
        <img className='logo' src={require('../../Images/sterling_logo.png')}  alt=""/>
        </div >
        {
          menuItem.map((item, index)=>(
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>
          ) )
        }
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideBar