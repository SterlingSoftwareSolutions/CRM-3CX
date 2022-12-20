import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Calls from "./pages/Calls";
import Dashboard from "./pages/Dashboard";
import Agents from "./pages/Agents";
function App() {
  return (
    <div>
      <BrowserRouter>
        <SideBar>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/calls" element={<Calls/>}/>
            <Route path="/agents" element={<Agents/>}/>
          </Routes>
        </SideBar>
      </BrowserRouter>
    </div>
  );
}

export default App;
