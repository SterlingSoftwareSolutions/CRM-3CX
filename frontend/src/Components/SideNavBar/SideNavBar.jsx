import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Button, Image, Row } from "antd";

import "./SideNavBar.css";
import { ReactComponent as DashboardIcon } from "../../Assets/icons/dashboard.svg";
import { ReactComponent as InquireIcon } from "../../Assets/icons/inquire.svg";
import { ReactComponent as UsersIcon } from "../../Assets/icons/users.svg";
import { ReactComponent as AgentsIcon } from "../../Assets/icons/support-svgrepo-com.svg";
import { ReactComponent as Logout } from "../../Assets/logout.svg";
import { ReactComponent as Logo } from "../../Assets/icons/logo.svg";
import { ReactComponent as SidebarOpen } from "../../Assets/sidebar-show.svg";
import { ReactComponent as SidebarHide } from "../../Assets/sidebar-hide.svg";

const SideNavBar = () => {
  const [isExpanded, setExpandedState] = useState(false);

  return (
    <>
      <div class="fixed-header">
        <div class="container">
          <div className="logout">
            <Row>
              <p className="logout-title">Logout</p>
              <Logout />
            </Row>
          </div>
        </div>
      </div>
      <div
        className={
          isExpanded
            ? "side-nav-container"
            : "side-nav-container side-nav-container-NX"
        }
      >
        <div className="nav-upper">
          <div className="nav-heading">
            <div className="container-one">
              <Row>
                {isExpanded && <Logo />}

                <Button
                  type="link"
                  className={
                    isExpanded ? "sidebar-visible" : "sidebar-collapsed"
                  }
                  onClick={() => setExpandedState(!isExpanded)}
                  icon={isExpanded ? <SidebarHide /> : <SidebarOpen />}
                />
              </Row>
            </div>
          </div>
          <div className={isExpanded ? "nav-menu" : "nav-menu-collapsed"}>
            <a
              href={"/"}
              className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
            >
              <DashboardIcon />
              {isExpanded && <p className="menu-item-sidebar">{"Dashboard"}</p>}
            </a>
          </div>
          <div className={isExpanded ? "nav-menu" : "nav-menu-collapsed"}>
            <a
              href={"/inquire"}
              className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
            >
              <InquireIcon />
              {isExpanded && <p className="menu-item-sidebar">{"Inquire"}</p>}
            </a>
          </div>
          <div className={isExpanded ? "nav-menu" : "nav-menu-collapsed"}>
            <a
              href={"/users"}
              className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
            >
              <UsersIcon />
              {isExpanded && <p className="menu-item-sidebar">{"Users"}</p>}
            </a>
          </div>
          <div className={isExpanded ? "nav-menu" : "nav-menu-collapsed"}>
            <a
              href={"/agents"}
              className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
            >
              <AgentsIcon />
              {isExpanded && <p className="menu-item-sidebar">{"Agents"}</p>}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavBar;
