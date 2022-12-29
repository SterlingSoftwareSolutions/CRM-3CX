import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CustomerPopUp from "./Components/PopCustomer/CustomerPopUp";
import Dashboard from "./Pages/Dashboard/index";
import SideNavBar from "./Components/SideNavBar/SideNavBar";
import Types from "./Components/Inquiries/Types";
import Login from "./Pages/LoginPage/index";
import { Col, Row } from "antd";
import Inquiry from "./Components/Inquiries/Inquiry";
import Types from "./Components/Inquiries/Types";

function App() {
  const token = sessionStorage.getItem('token');

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
        </Routes>
        <Row>
          <Col span={4}>
           {(token !== null || "") ? <SideNavBar />: ""} 
          </Col>
          <Col span={20}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="agents" element={<CustomerPopUp />} />
              <Route path="contact" element={<Dashboard />} />
              <Route path="/customer/:phone" element={<CustomerPopUp />} />
              <Route path="/types" element={<Types />} />
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>
    </div>
  );
}

export default App;
