import React, { useState } from "react";

import { Outlet, Link } from "react-router-dom";

import "./SideNavBar.css";

const SideNavBar = () => {
  const [isExpanded, setExpandedState] = useState(false);
  const menuItems = [
    {
      text: "Dashboard",
      icon: "icon/grid.svg",
      href: "/",
    },
    {
      text: "Inquire",
      icon: "icon/grid.svg",
      href: "/inquire",
    },
    {
      text: "Users",
      icon: "icon/grid.svg",
      href: "/users",
    },
    {
      text: "Agents",
      icon: "icon/grid.svg",
      href: "/agents",
    },
  ];

  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpanded && (
            <div className="nav-brand">
              <img src="icon/" alt="nav brand" />
              <h2>Sterling BPO CRM</h2>
            </div>
          )}
          <button
            className={
              isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setExpandedState(!isExpanded)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menu">
          {menuItems.map(({text, icon ,href}) => (
            <a href={href} className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}>
              <img src={icon} alt="img" srcSet="" />
              {isExpanded && <p>{text}</p>}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
