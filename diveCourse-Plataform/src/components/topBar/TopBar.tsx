import React from "react";
import "./TopBar.css";
import { TbScubaMask } from "react-icons/tb";
import { SlLogout } from "react-icons/sl";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();
  const { userName,setUserRole, setToken } = useAuth();

  const logout = () => {
    setUserRole(null);
    setToken(null);
    navigate("/");
  };
  return (
    <div className="topBar">
      <div className="userInfo">
        <div className="circleImg">
          {" "}
          <TbScubaMask className="iconPlaceHolder" />{" "}
        </div>
        <p className="userName">{userName}</p>
      </div>
      <div className="logout" onClick={logout}>
        <SlLogout className="logoutIcon" />
        <p className="logoutTxt">Log-Out</p>
      </div>
    </div>
  );
};

export default TopBar;
