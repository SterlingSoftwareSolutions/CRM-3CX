import React from "react";
import "./index.css";
import { Card, Form, Input, Checkbox } from "antd";

const LoginPage = () => {
  return (
    <Card
      title="Login"
      headStyle={{ fontSize: "24px" }}
      className="title-style"
      style={{ boxShadow: "0 0 5px rgba(0,0,0,1" }}
    >
      <Form>
        <Form.Item
          className="input-style"
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          className="input-style"
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <div className="d-grid">
          <button type="submit" className="button-style">
            Login
          </button>
        </div>
      </Form>
    </Card>
  );
};

export default LoginPage;
