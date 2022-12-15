import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './Components/LoginPage/login.component';
import './Components/LoginPage/login.css'
import CustomerAdd from './MultiForm/CustomerAdd';

function App() {
  return (
     <Router>
   <div className="App">
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
               {/* <li className="nav-item">
                 <Link className="nav-link" to={'/Customer'}>
                   Customer Page
                 </Link>
               </li> */}
               <li className='nave-item'>
                <Link className='nav-link' to={'/customeradd'}>
                  CustomerAdd
                </Link>
               </li>
             </ul>
           </div>
         </div>
       </nav>
       <div className="auth-wrapper">
         <div className="auth-inner">
           <Routes>
             <Route exact path="/" element={<Login />} />
             <Route path="/sign-in" element={<Login />} />
             {/* <Route path="/sign-up" element={<FormOne />} /> */}
             <Route path="/customeradd" element={<CustomerAdd/>}/>
           </Routes>
         </div>
       </div>
     </div>
   </Router>
  
  );
}

export default App;
