import React from "react";
import "./Logo.css";

const Logo = () => {
  return (
    <>
      <div className="logo">
        <img src="/scuba-diver.png" alt="logo" className="logoImg" />
        <h1 className="logoTxt">
          <span style={{ color: "#494949" }}>Dev</span>-b
        </h1>
      </div>
      <div
        style={{ width: "100%", height: "1px", backgroundColor: "#1d39d829" }}
      />
    </>
  );
};

export default Logo;
