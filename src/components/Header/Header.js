import React from "react";
import Logo from "../../images/replylogo.png";
import "./header.scss";

function Header() {
  const handleEnter = (e) => {
    var target = e.target;
    target.closest(".consecteur").classList.add("open");
  };
  const handleLeave = (e) => {
    var target = e.target;
    target.closest(".consecteur").classList.remove("open");
  };
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img alt="" src={Logo}></img>
        </div>
        <div className="navigation">
          <div className="consecteur" onMouseEnter={(e) => handleEnter(e)} onMouseLeave={(e) => handleLeave(e)}>
            <div className="dropdown">
              consecteuter
              <ul>
                <li>Home</li>
                <li>Search</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <button className="btn-primary">
            <a href="/">Almeiden</a>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
