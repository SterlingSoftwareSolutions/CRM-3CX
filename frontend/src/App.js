import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './Components/LoginPage/index.css'
import CustomerAdd from './Components/LoginPage/CustomerAdd';
import Navbar from './Components/navbar/Navbar';
import Index from './Components/LoginPage/Index';
import Types from './Components/LoginPage/Types';

function App() {
  return (
     <Router>
   <div className="App">
       <Navbar/>
       <div className="auth-wrapper">
         <div className="auth-inner">
           <Routes>
            
             <Route path="/sign-in" element={<Index/>} />
             <Route path ="/types" element={<Types/>}/>
             <Route path="/customeradd" element={<CustomerAdd/>}/>
             
             
           </Routes>
         </div>
       </div>
     </div>
   </Router>
  
  );
}

export default App;
