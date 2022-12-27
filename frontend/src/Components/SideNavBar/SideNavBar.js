import React, { useState } from "react";

import { Outlet, Link } from "react-router-dom";

import "./SideNavBar.css";
import { Dashboard } from "@mui/icons-material";

const SideNavBar = () => {
  const [isExpanded, setExpandedState] = useState(false);
  // const menuItems = [
  //   {
  //     text: "Dashboard",
  //     icon: "icon/grid.svg",
  //     href: "/",
  //   },
  //   {
  //     text: "Inquire",
  //     icon: "icon/grid.svg",
  //     href: "/inquire",
  //   },
  //   {
  //     text: "Users",
  //     icon: "icon/grid.svg",
  //     href: "/users",
  //   },
  //   {
  //     text: "Agents",
  //     icon: "icon/grid.svg",
  //     href: "/agents",
  //   },
  // ];

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
        <div className="nav-menu"></div>
        <div className="nav-menu">
          <img
            src={require("./icons/dashboard.png")}
            className="nav-menu-img"
            alt="img"
          />
          <a
            href={"/"}
            className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
          >
            {isExpanded && <p>{"Dashboard"}</p>}
          </a>
        </div>
        <div className="nav-menu">
          <img
            src={require("./icons//inquiry.png")}
            className="nav-menu-img"
            alt="img"
          />
          <a
            href={"/inquire"}
            className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
          >
            {isExpanded && <p>{"Inquire"}</p>}
          </a>
        </div>
        <div className="nav-menu">
          <img
            src={require("./icons/users.png")}
            className="nav-menu-img"
            alt="img"
          />
          <a
            href={"/users"}
            className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
          >
            {isExpanded && <p>{"Users"}</p>}
          </a>
        </div>
        <div className="nav-menu">
          <img
            src={require("./icons/agent.png")}
            className="nav-menu-img"
            alt="img"
          />
          <a
            href={"/agents"}
            className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
          >
            {isExpanded && <p>{"Agents"}</p>}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
