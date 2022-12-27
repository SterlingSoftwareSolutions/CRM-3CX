import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 

import Inquiry from './Components/Inquiries/Inquiry';
import Types from './Components/Inquiries/Types';
import PopUp from './Components/PopCustomer/PopUp';
import LoginPage from './Pages/LoginPage/index';


function App() {
  return (
    <div className="App">
      <Types/>
    </div>
  );
}

export default App;
