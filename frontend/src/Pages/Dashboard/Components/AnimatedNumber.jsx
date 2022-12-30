import React from "react";
import { ReactComponent as Users } from "../../../Assets/users.svg";
import { ReactComponent as InBoundCalls } from "../../../Assets/incomingcalls.svg";
import { ReactComponent as OpenInquiry } from "../../../Assets/open.svg";
import { ReactComponent as ClosedInquiries } from "../../../Assets/closed.svg";
import { ReactComponent as OutBoundCalls } from "../../../Assets/outgoingcalls.svg";
import "../index.css";
import NumberCards from "../../../Components/NumberCards";
import { Card, Col, Row } from "antd";

const AnimatedNumber = () => {
  return (
    <Card style={{ width: "97%" }}>
      <Row>
        <div className="card-one-style">
          <Row>
            <Col className="col-one-style">
              <Users />
            </Col>
            <Col>
              <p className="number-style">
                <NumberCards value={200} />
              </p>
              <p>Total Agents</p>
            </Col>
          </Row>
        </div>
        <div className="card-one-style">
          <Row>
            <Col className="col-one-style">
              <InBoundCalls />
            </Col>
            <Col>
              <p className="number-style">
                <NumberCards value={44} />
              </p>
              <p>InBound Calls Per Day</p>
            </Col>
          </Row>
        </div>
        <div className="card-one-style">
          <Row>
            <Col className="col-one-style">
              <OutBoundCalls />
            </Col>
            <Col>
              <p className="number-style">
                <NumberCards value={52} />
              </p>
              <p>OutBound Calls Per Day</p>
            </Col>
          </Row>
        </div>
        <div className="card-one-style">
          <Row>
            <Col className="col-one-style">
              <OpenInquiry />
            </Col>
            <Col>
              <p className="number-style">
                <NumberCards value={18} />
              </p>
              <p>Resolved Inquiries</p>
            </Col>
          </Row>
        </div>
        <div className="card-one-style">
          <Row>
            <Col className="col-one-style">
              <ClosedInquiries />
            </Col>
            <Col>
              <p className="number-style">
                <NumberCards value={25} />
              </p>
              <p>Unresolved Inquiries</p>
            </Col>
          </Row>
        </div>
      </Row>
    </Card>
  );
};

export default AnimatedNumber;
