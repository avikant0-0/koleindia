import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
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
  color: white;
  text-decoration: none;
  font-size: 25px;
  font-weight: bold;
  padding: 10px;
  transition: all 0.3s ease;
  margin-top: 40px;
  display: inline-block;  // This ensures the margin is applied correctly
  &:hover {
    font-size:27px;
  }

`;
const LogoLink = styled(NavLink)`
  font-size: 37px;
  font-weight: 900;
  margin-top:30px; 
  &:hover {
    font-size: 37px;
  }
`;


const NavBar = () => {
  return (
    <NavBarContainer>
      <NavList>
        <NavItem><LogoLink>KoleIndia |</LogoLink></NavItem>
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