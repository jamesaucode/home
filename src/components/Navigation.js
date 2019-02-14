import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <div className="navigation-wrapper">
    <div className="top" />
    <div className="navigation-container">
      <img
        className="logo"
        src="https://www.shareicon.net/data/256x256/2016/01/07/699720_computer_512x512.png"
        alt="logo"
      />
      <h2 className="navigation--heading">James Au's playground</h2>
      <div className="icon">
        <NavLink to="/home" exact={true} activeClassName="active-link" className="fa fa-home" aria-hidden="true">
          <span className="icon__text">Home</span>
        </NavLink>
        {/* <NavLink to="/blog" activeClassName="active-link" className="fa fa-file-text" aria-hidden="true">
          <span className="icon__text">Blog</span>
        </NavLink> */}
        <NavLink to="/home/about" activeClassName="active-link" className="fa fa-info-circle" aria-hidden="true">
          <span className="icon__text">About</span>
        </NavLink>
      </div>
    </div>
  </div>
);

export default Navigation;
