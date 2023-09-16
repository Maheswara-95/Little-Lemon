import React from "react";
import Nav from "./Nav";
import './Header.css';

function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src="Logo.png" alt="Logo" />
        </div>

        <div className="navigation">
          <Nav />
        </div>
      </div>
    </>
  );
}

export default Header;
