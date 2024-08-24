import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
//   background-color: rgba(255, 255, 255, 0.8);
//   backdrop-filter: blur(5px);
  display: flex;
  justify-content: left;
  align-items: center;
  z-index: 1000;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const NavItem = styled.li`
  margin: 0 15px;
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  transition: all 0.3s ease;

  &:hover {
    color: #555;
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavList>
        <NavItem><NavLink to="/">Home</NavLink></NavItem>
        <NavItem><NavLink to="/about">Archieves</NavLink></NavItem>
        <NavItem><NavLink to="/services">DGMS</NavLink></NavItem>
        <NavItem><NavLink to="/portfolio">ContactUs</NavLink></NavItem>
        <NavItem><NavLink to="/contact">AboutUs</NavLink></NavItem>
      </NavList>
    </NavBarContainer>
  );
};

export default NavBar;