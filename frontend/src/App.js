import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CustomerPopUp from "./Components/PopCustomer/CustomerPopUp";
import Dashboard from "./Pages/Dashboard/index";
import SideNavBar from "./Components/SideNavBar/SideNavBar";
import { Col, Row } from "antd";

function App() {
  return (
    <Row>
      <BrowserRouter>
        <Col span={4}>
          <SideNavBar />
        </Col>
        <Col span={20}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="agents" element={<CustomerPopUp />} />
            <Route path="contact" element={<Dashboard />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </Col>
      </BrowserRouter>
    </Row>
  );
}

export default App;
