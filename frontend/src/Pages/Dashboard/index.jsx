import { Col, Row } from "antd";
import {useNavigate} from 'react-router-dom';
import React, { useEffect, useRef, useState } from "react";
import "./index.css";

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
  const token = sessionStorage.getItem('token');
  const navigate = useNavigate();
  useEffect(() => {
    if (token === null || "") {
      navigate('/login')
    }
  }, []);

  return (
    <div>
      <Row>
        {/* <Card>
          <Row>
            <div>
              <Users /> <NumberCards value={200} /> Name
            </div>
            <div>
              <OutBoundCalls /> <NumberCards value={200} /> Name
            </div>
            <div>
              <InBoundCalls /> <NumberCards value={200} /> Name
            </div>
            <div>
              <OpenInquiry /> <NumberCards value={200} /> Name
            </div>
            <div>
              <ClosedInquiries /> <NumberCards value={200} /> Name
            </div>
          </Row>
        </Card> */}
      </Row>
      <Row>
        <Col span={16}></Col>
        <Col span={8}></Col>
      </Row>
      <Row>
        <Col span={6}>
   
          <h1>Hello bokka</h1>
        </Col>
        <Col span={6}></Col>
        <Col span={6}></Col>
        <Col span={6}></Col>
      </Row>
    </div>
  );
};

export default Dashboard;
