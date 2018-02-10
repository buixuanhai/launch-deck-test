import React from "react";
import { Link } from "react-router-dom";

const Header = ({ text = "Home", backLink = "/" }) => {
  return (
    <div
      style={{
        height: 60,
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingLeft: 10,
        paddingRight: 10
      }}
    >
      <div style={{ flex: 1, paddingBottom: 10 }}>
        <Link to={backLink} style={{ color: "#fff" }}>
          &lt; Back
        </Link>
      </div>
      <div style={{ flex: 1 }}>
        <p className="text-center">{text}</p>
      </div>
      <div style={{ flex: 1 }} />
    </div>
  );
};

export default Header;
