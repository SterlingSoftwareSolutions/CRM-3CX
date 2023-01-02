import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CustomerPopUp from "./Components/PopCustomer/CustomerPopUp";
import Dashboard from "./Pages/Dashboard/index";
import Users from "./Pages/User/index";
import SideNavBar from "./Components/SideNavBar/SideNavBar";
import Types from "./Components/Inquiries/Types";
import Login from "./Pages/LoginPage/index";
import { Col, Row } from "antd";
import Inquiry from "./Components/Inquiries/Inquiry";
import AllInquiry from "./Components/Inquiries/Inquiries";
import Errorpage from "./Pages/404/404";

function App() {
  const loggedInUser = sessionStorage.getItem("authenticated");
  const [authenticated, setauthenticated] = useState(
    loggedInUser ? loggedInUser : false
  );
  return (
    <div>
      <BrowserRouter>
        <Row>
          <Col span={4}>{authenticated ? <SideNavBar /> : ""}</Col>
          <Col span={20}>
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/customer/:phone" element={<CustomerPopUp />} />
              <Route path="/types" element={<Types />} />
              <Route path="/inquiry-popup" element={<Inquiry />} />
              <Route path="/inquiries" element={<AllInquiry />} />
              <Route path="/users" element={<Users />} />
              <Route path="/*" element={<Errorpage />} />
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>
    </div>
  );
}

export default App;
