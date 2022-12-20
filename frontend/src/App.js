import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import './Components/LoginPage/index.css';
import Index from './Components/LoginPage/Index';
import Password from './Components/Pages/Password';


function App() {
  return (
     <Router>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route path="/sign-in" element={<Index/>} />
                <Route path="/password" element={<Password/>}/>
              </Routes>
            </div>
          </div>
        </div>
   </Router>
  
  );
}

export default App;
