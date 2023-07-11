import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="site__header">
      <div className="site__header__nav__logo">
        <div>
          <img src="../../../assets/img/logo.svg" alt="" />
        </div>
        <p>Crypto</p>
      </div>
      <nav className="site__header__nav">
        <ul>
          <li>
            <Link className="site__header__nav__link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="site__header__nav__link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="site__header__nav__link" to="/service">
              Service
            </Link>
          </li>
          <li>
            <Link className="site__header__nav__link" to="/readmap">
              ReadMap
            </Link>
          </li>
          <li>
            <Link className="site__header__nav__link" to="/team">
              Team
            </Link>
          </li>
          <li>
            <Link className="site__header__nav__link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
