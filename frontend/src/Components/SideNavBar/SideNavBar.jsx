import React, { useState } from "react";
import { Button, Image, Row } from "antd";
import { useNavigate } from "react-router-dom";

import "./SideNavBar.css";
import { ReactComponent as DashboardIcon } from "../../Assets/icons/dashboard.svg";
import { ReactComponent as InquireIcon } from "../../Assets/icons/inquire.svg";
import { ReactComponent as UsersIcon } from "../../Assets/icons/users.svg";
import { ReactComponent as AgentsIcon } from "../../Assets/icons/support-svgrepo-com.svg";
import { ReactComponent as Logout } from "../../Assets/logout.svg";
import { ReactComponent as Logo } from "../../Assets/icons/logo.svg";
import { ReactComponent as SidebarOpen } from "../../Assets/sidebar-show.svg";
import { ReactComponent as SidebarHide } from "../../Assets/sidebar-hide.svg";
import { ReactComponent as Customers } from "../../Assets/customers.svg";

const SideNavBar = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [isExpanded, setExpandedState] = useState(false);

  let logout = () => {
    setTimeout(() => {
      setLoading(false);
      localStorage.clear();
      localStorage.clear();
      window.location.reload();
      navigate("/login");
    }, []);
  };
  return (
    <>
      <div className="main-sidebar-and-topbar">
        <div className="fixed-header">
          <div className="container">
            <div className="logout">
              <Row>
                <a onClick={logout} className="logout-title">
                  <p>Logout</p>
                </a>
                <a onClick={logout} className="logout-title">
                  <Logout />
                </a>
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
                {isExpanded && (
                  <p className="menu-item-sidebar">{"Dashboard"}</p>
                )}
              </a>
            </div>
            <div className={isExpanded ? "nav-menu" : "nav-menu-collapsed"}>
              <a
                href={"/inquiries"}
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
            <div className={isExpanded ? "nav-menu" : "nav-menu-collapsed"}>
              <a
                href={"/customers"}
                className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
              >
                <Customers />
                {isExpanded && (
                  <p className="menu-item-sidebar">{"Customers"}</p>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavBar;
