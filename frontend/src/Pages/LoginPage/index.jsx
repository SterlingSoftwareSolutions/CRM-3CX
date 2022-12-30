import React, { useState } from "react";
import "./index.css";
import { Card, Form, Input, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Dashboard/index";

const LoginPage = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [authenticated, setauthenticated] = useState(
    sessionStorage.getItem(sessionStorage.getItem("authenticated") || false)
  );
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
        alert(data.error);
      } else {
        sessionStorage.setItem("token", data.data.token);
        sessionStorage.setItem("authenticated", true);
        setauthenticated(true);
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

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
          name="email"
          onChange={(e) => setUsername(e.target.value)}
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          className="input-style"
          label="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <div className="d-grid">
          <button onClick={handleSubmit} type="submit" className="button-style">
            Login
          </button>
        </div>
      </Form>
    </Card>
  );
};

export default LoginPage;
