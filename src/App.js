import React, { useState } from "react";
import "./App.css";
import {
  Container,
  Row,
  Col,
  Button,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import Navigation from "./Navigation";
import userImg from "./images/me.png";
import { Fade } from "react-reveal";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mainContentWidth, setMainContentWidth] = useState(97);
  const [sidebarWidth, setSidebarWidth] = useState(3);
  const [open, setOpen] = useState("closed");
  const [toggleBtn, setToggleBtn] = useState("fas fa-chevron-right");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    mainContentWidth === 97 ? setMainContentWidth(90) : setMainContentWidth(97);
    sidebarWidth === 3 ? setSidebarWidth(10) : setSidebarWidth(3);
    open === "closed" ? setOpen("open") : setOpen("closed");
    toggleBtn === "fas fa-chevron-right"
      ? setToggleBtn("fas fa-chevron-left")
      : setToggleBtn("fas fa-chevron-right");
  };
  return (
    <Container fluid>
      <Row>
        <div
          style={{
            height: "100vh",
            width: `${sidebarWidth}%`,
            borderRight: "2px solid #333",
            background: "#343a40",
            // transition: "width 0.5s",
          }}
        >
          <div>
            <Nav
              vertical
              className="nav-menu d-flex justify-content-between"
              id="nav-wrapper"
            >
              {sidebarOpen === true ? (
                <Fade left duration={100}>
                  <NavbarText className="menu-head">
                    <img
                      src={userImg}
                      alt="Thumbnail image of user"
                      srcSet=""
                      style={{
                        border: "2px solid firebrick",
                        borderRadius: "80px",
                        width: "50px",
                      }}
                    />
                    <div
                      className="menu-head-content-text"
                      style={{ lineHeight: "1" }}
                    >
                      <>
                        <p>Class aptent taciti</p>
                        <p>sociosqu ad litora</p>
                        <p>torquent per conubia</p>
                      </>
                    </div>
                  </NavbarText>
                </Fade>
              ) : null}
              <NavItem className="menu-button d-flex justify-content-between">
                <div className="d-flex justify-content-left" href="/">
                  <i
                    className="fas fa-home"
                    style={{ fontSize: "22px", margin: "2px 0" }}
                  ></i>
                  <Fade left duration={50}>
                    <span className={open}>Home</span>
                  </Fade>
                </div>
              </NavItem>
              <NavItem className="menu-button d-flex justify-content-between">
                <div className="d-flex justify-content-left">
                  <div className="button-icon-wrapper">
                    <i
                      className="fas fa-users"
                      style={{ fontSize: "22px" }}
                    ></i>
                  </div>
                  <div className="button-text-wrapper">
                    <Fade left duration={50}>
                      <span className={open}>Team</span>
                    </Fade>
                  </div>
                </div>
              </NavItem>
              <NavItem className="menu-button d-flex justify-content-between">
                <div className="d-flex justify-content-left">
                  <i
                    className="fas fa-drafting-compass"
                    style={{ fontSize: "22px", padding: "2px 0" }}
                  ></i>
                  <div className="span-wrapper d-flex justify-content-left">
                    <Fade left duration={50}>
                      <span className={open}>Projects</span>
                    </Fade>
                  </div>
                </div>
              </NavItem>
              <NavItem className="menu-button d-flex justify-content-between">
                <div className="d-flex justify-content-left">
                  <i
                    className="fas fa-chart-bar"
                    style={{ fontSize: "22px", padding: "2px 0" }}
                  ></i>
                  <Fade left duration={50}>
                    <span className={open}>Reports</span>
                  </Fade>
                </div>
              </NavItem>
            </Nav>
          </div>
        </div>
        <div style={{ height: "100vh", width: `${mainContentWidth}%` }}>
          <div className="main-header">
            <Navbar color="dark" dark expand="md">
              <i
                className={toggleBtn}
                id="toggle-menu-btn"
                onClick={toggleSidebar}
              ></i>
              <NavbarBrand href="/">reactstrap</NavbarBrand>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
              </Nav>
              <NavbarText
                style={{ fontSize: "24px", cursor: "pointer" }}
                title="Logout"
              >
                <i class="fas fa-sign-out-alt"></i>
              </NavbarText>
              {/* <Button color="info">Logout</Button> */}
            </Navbar>
          </div>
          <div className="main-body"></div>
        </div>
      </Row>
    </Container>
  );
}

export default App;
