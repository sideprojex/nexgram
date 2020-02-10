import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import AuthModal from "./AuthModal";

const NavBar = ({ signUpUser, loginUser, currentUser, logoutUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand>Nextagram</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {currentUser ? (
              <NavItem className="mr-5">
                <NavbarText>Hello, {currentUser.username}</NavbarText>
              </NavItem>
            ) : (
              ""
            )}
            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
            {currentUser ? (
              <>
                <NavItem>
                  <NavLink tag={Link} to="/profile">
                    My Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/image/upload">
                    Upload
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={logoutUser} style={{ cursor: "pointer" }}>
                    Logout
                  </NavLink>
                </NavItem>
              </>
            ) : (
              <NavItem>
                <AuthModal
                  buttonLabel="Login"
                  signUpUser={signUpUser}
                  loginUser={loginUser}
                />
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
