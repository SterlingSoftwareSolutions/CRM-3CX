import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';


import PopUp from './Components/PopCustomer/PopUp';



function App() {
  return (
     <Router>
       
              <Routes>
                
                <Route path="/customer/:customer_number" element={<PopUp/>}/>
              </Routes>
            
   </Router>
  
  );
}

export default App;
