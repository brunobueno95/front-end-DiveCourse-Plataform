/* eslint-disable @typescript-eslint/no-unused-vars */

import "./login.css";
import { BiUser } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";
import { useState, useEffect } from "react";
import login from "./loginPostReq";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUserRole, setToken, setUserName } = useAuth();
  const [userClientName, setUserClientName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (userClientName && password) {
      try {
        const response = await login(userClientName, password);
        console.log("Login successful:", response);
        console.log(response);
        setUserRole(response.role);
        setToken(response.token);
        setUserName(response.userName)
        if (response.role == "admin") {
          navigate("/admin");
        } else if (response.role == "student") {
          navigate("/");
        }
      } catch (error) {
        console.error("Login failed:", (error as Error).message);
        console.log(Response);
      }
    }
  };

  return (
    <div className="page">
      <div className="blackLayer" />

      <div className="login-box">
        <h1 className="logo-text">
          Dev-<span className="mainLogo-text">b</span>{" "}
        </h1>
        <img src="/scuba-diver.png" alt="diver-icon" className="diverIcon" />

        <h1 className="logo-text">
          <span className="mainLogo-text"></span> Dive Courses
        </h1>
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#1d39d875",
            marginTop: "20PX",
          }}
        />

        <div className="loginForm">
          <div className="loginField">
            <BiUser className="loginIcon" />
            <input
              className="loginInput"
              type="text"
              onChange={(e) => setUserClientName(e.target.value)}
            />
          </div>

          <div className="loginField">
            <AiOutlineLock className="loginIcon" />
            <input
              className="loginInput"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
          </div>
        </div>
        <div className="btnBox">
          {" "}
          <button className="loginBtn" onClick={handleLogin}>
            Log-in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
