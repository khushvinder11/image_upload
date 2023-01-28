import React from "react";
import { useNavigate } from "react-router-dom";
import Icon, { CloudUploadOutlined } from "@ant-design/icons";
import "./NavbarStyle.less";

const Navbar = () => {
  const navigate = useNavigate();
  const btninfo = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "one",
    "two",
    "three",
    "four",
    "five",
    "one",
    "two",
    "three",
    "four",
    "five",
    "one",
    "two",
    "three",
    "four",
    "five",
    "one",
    "two",
    "three",
    "four",
    "five",
    "one",
    "two",
    "three",
    "four",
    "five",
  ];
  return (
    <div className="navbar-container">
      <header>
        <div className="logo">Logo</div>
        <div className="search-header">
          <input type={"search"} placeholder="Search item................" />
        </div>
        <div className="sign-btn">
          <button className="btn login" onClick={() => navigate("/loginpage")}>
            login
          </button>

          <CloudUploadOutlined onClick={() => navigate("/fileupload")} />
        </div>
      </header>
      <div className="teg-container">
        {btninfo.map((v) => {
          return <button className="btn-tag-header">{v}</button>;
        })}
      </div>
    </div>
  );
};

export default Navbar;
