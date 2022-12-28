import React, { useState } from "react";

import { Outlet, Link } from "react-router-dom";

import "./SideNavBar.css";
import { ReactComponent as DashboardIcon } from "../../Assets/icons/dashboard.svg";
import { ReactComponent as InquireIcon } from "../../Assets/icons/inquire.svg";
import { ReactComponent as UsersIcon } from "../../Assets/icons/users.svg";
import { ReactComponent as AgentsIcon } from "../../Assets/icons/support-svgrepo-com.svg";
import { ReactComponent as Logo } from "../../Assets/icons/sterling_logo.svg";

const SideNavBar = () => {
  const [isExpanded, setExpandedState] = useState(false);

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
              {/* <Logo /> */}
              <h2>Sterling</h2>
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
          <DashboardIcon />
          <a
            href={"/"}
            className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
          >
            {isExpanded && <p>{"Dashboard"}</p>}
          </a>
        </div>
        <div className="nav-menu">
          <InquireIcon />
          <a
            href={"/inquire"}
            className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
          >
            {isExpanded && <p>{"Inquire"}</p>}
          </a>
        </div>
        <div className="nav-menu">
          <UsersIcon />
          <a
            href={"/users"}
            className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
          >
            {isExpanded && <p>{"Users"}</p>}
          </a>
        </div>
        <div className="nav-menu">
          <AgentsIcon />
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
