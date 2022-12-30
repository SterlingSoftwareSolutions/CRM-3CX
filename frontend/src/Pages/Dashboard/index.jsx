import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import "./index.css";

import AnimatedNumber from "./Components/AnimatedNumber";
import AgentList from "./Components/AgentList";
import PieCharts from "./Components/PieCharts";

const projectdata = [
  { name: "Abans", value: 207 },
  { name: "Koko", value: 302 },
  { name: "Big Deals", value: 159 },
];

const agentdata = [
  { name: "John", value: 54 },
  { name: "David", value: 67 },
  { name: "Katy", value: 61 },
  { name: "Jane", value: 51 },
  { name: "Kevin", value: 71 },
];

const inbounddata = [
  { name: "Abans", value: 89 },
  { name: "Koko", value: 98 },
  { name: "Big Deals", value: 75 },
];

const outbounddata = [
  { name: "Abans", value: 76 },
  { name: "Koko", value: 94 },
  { name: "Big Deals", value: 81 },
];

const resolveddata = [
  { name: "Abans", value: 31 },
  { name: "Koko", value: 54 },
  { name: "Big Deals", value: 41 },
];

const unresolveddata = [
  { name: "Abans", value: 12 },
  { name: "Koko", value: 7 },
  { name: "Big Deals", value: 6 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#fc4242"];

const Dashboard = () => {
  const loggedInUser = sessionStorage.getItem("authenticated");
  const [authenticated, setauthenticated] = useState(loggedInUser?loggedInUser :false);

  useEffect(() => {
    if (loggedInUser) {
      setauthenticated(true);
    }
  }, []);

  if (!authenticated) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <div>
        <Row style={{ marginTop: "5%", width: "1100px" }}>
          <AnimatedNumber />
        </Row>
        <Row>
          <Col span={13}></Col>
          <Col span={11}>
            <AgentList />
          </Col>
        </Row>
        <Row>
          <Col span={6}>{/* <PieCharts /> */}</Col>
          <Col span={6}>{/* <PieCharts /> */}</Col>
          <Col span={6}>{/* <PieCharts /> */}</Col>
          <Col span={6}>{/* <PieCharts /> */}</Col>
        </Row>
      </div>
    );
  }

  
};

export default Dashboard;
