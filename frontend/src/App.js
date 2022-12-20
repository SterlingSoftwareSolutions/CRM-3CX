import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/sideBar/SideBar";
import Calls from "./pages/calls/Calls";
import Dashboard from "./pages/dashboard/Dashboard";
import Agents from "./pages/agents/Agents";
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
