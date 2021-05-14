import React from "react";
import "../style/header.css";
import Button from "./Button";
import Proptypes from "prop-types";

const Header = ({ logo }) => {
  return (
    <div className="container">
      <nav>
        <Button classes=" btn--green btn--curve" title="فروشگاه من" />
        <div className="nav-bar">
          <ul>
            <li>
              <a href="">درباره ما</a>
            </li>
            <li>
              <a href="">کسب وکار</a>
            </li>
            <li>
              <a href="">پشتیبانی</a>
            </li>
            <li>
              <a href="">سوالات متداول</a>
            </li>
          </ul>
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </nav>
    </div>
  );
};
export default Header;
Header.propTypes = {
  logo: Proptypes.string
};
