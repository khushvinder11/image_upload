import React from "react";
import { useNavigate } from "react-router-dom";
import Icon, { CloudUploadOutlined } from "@ant-design/icons";
import "./NavbarStyle.less";

const Navbar = () => {
  const navigate = useNavigate();
  const btninfo = [
    "Start Up",
    "DJ Nights",
    "Web Design",
    "Mobile Ui Design",
    "User Interface Design",
    "Ios App Design",
    "Ui Patterns",
    "App Design Inspiration",
    "Ui Web",
    "Onboarding",
    "App Ui",
    "Web App",
    "Mobile Ui",
    "Tag System",
    "Web Design",
    "Inspiration",
    " Design Thinking",
    "Responsive",
    "DesignLayoutUi",
    " Flat Design",
    " Site Design",
    "App Design Inspiration",
    "Ui Web",
    "Onboarding",
    "App Ui",
    "Web App",
    "Mobile Ui",
    "Tag System",
    "Web Design",
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
