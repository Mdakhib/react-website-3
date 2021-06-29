import React, { useState, useEffect } from "react";
import {  FaBars } from "react-icons/fa";
import {IconContext} from 'react-icons/lib';
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
      <IconContext.Provider value={{color:'#fff'}}>
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
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
