import React from "react";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import "./header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="headerContainer">
      <div>
        <p onClick={() => navigate("/")}>Logo</p>
      </div>
      <div className="pageContainer">
        <p onClick={() => navigate("/")}>All products</p>
        <p onClick={() => navigate("/about")}>About</p>
        <p onClick={() => navigate("/contact")}>Contact us</p>
      </div>
      <div className="iconContainer">
        <BsCart3
          fontSize={25}
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/cart")}
        />
        <FaRegUser
          fontSize={25}
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/profile")}
        />
      </div>
    </div>
  );
}

export default Header;
