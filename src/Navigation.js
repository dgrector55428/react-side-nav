import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./Navigation.css";

const Navigation = (props) => {
  console.log(props);
  const [open, setOpen] = useState("closed");

  props.sidebarState === "true" ? setOpen("open") : setOpen("closed");

  return (
    <div>
      <p>List Based</p>
      <Nav vertical>
        <NavItem>
          <NavLink href="#">
            <i className="fas fa-home" style={{ color: "#000" }}></i>
            <h5 className={open}>Home</h5>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;
