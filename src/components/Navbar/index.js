import React, { useState,useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

import { FaBars } from "react-icons/fa";

function Navbar({ toggle }) {
  const [scrolNav, setScrolNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrolNav(true);;
    } else {
      setScrolNav(false);;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll',changeNav)
  },[])

  return (
    <>
      <Nav scrolNav={scrolNav}>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
