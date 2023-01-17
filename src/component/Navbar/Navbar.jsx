import React from "react";
import { useNavigate } from "react-router-dom";
import Icon, { CloudUploadOutlined } from "@ant-design/icons";
import "./NavbarStyle.less";

const Navbar = () => {
  const navigate = useNavigate();
  return (
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
  );
};

export default Navbar;
