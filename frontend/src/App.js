import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Calls from "./pages/Calls";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
function App() {
  return (
    <div>
      <BrowserRouter>
        <SideBar>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/calls" element={<Calls/>}/>
            <Route path="/users" element={<Users/>}/>
          </Routes>
        </SideBar>
      </BrowserRouter>
    </div>
  );
}

export default App;
