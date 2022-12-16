import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './Components/LoginPage/login.component';
import './Components/LoginPage/login.css'
import CustomerAdd from './Components/MultiForm/CustomerAdd';
import Navbar from './Components/navbar/Navbar';

function App() {
  return (
     <Router>
   <div className="App">
       <Navbar/>
       
           <Routes>
             <Route exact path="/" element={<Login />} />
             <Route path="/sign-in" element={<Login />} />
             {/* <Route path="/sign-up" element={<FormOne />} /> */}
             <Route path="/customeradd" element={<CustomerAdd/>}/>
           </Routes>
     </div>
   </Router>
  
  );
}

export default App;
