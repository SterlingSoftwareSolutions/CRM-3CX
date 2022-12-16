import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
         <div className="container">
           <Link className="navbar-brand" to={'/sign-in'}>
             Novel CRM
           </Link>
           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
             <ul className="navbar-nav ml-auto">
               <li className="nav-item">
                 <Link className="nav-link" to={'/sign-in'}>
                   Login
                 </Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link" to={'/types'}>
                   Types
                 </Link>
               </li>
               <li className='nave-item'>
                <Link className='nav-link' to={'/customeradd'}>
                  customeradd
                </Link>
               </li>
             </ul>
           </div>
         </div>
       </nav>
    </div>
  )
}

export default Navbar
