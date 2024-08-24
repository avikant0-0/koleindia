import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.div`
  position: fixed;
  right: ${props => props.isOpen ? '0px' : '-300px'};
  top: 0;
  width: 250px;
  height: 100%;
  background-color: #333;
  transition: all 0.5s ease-in-out;
  z-index:1001;
`;

const OpenButton = styled.button`
  position: fixed;
  top: 20px;
  right: ${props => props.isOpen ? '170px' : '10px'};
  transition: all 0.5s ease-in-out;
  z-index: 1002;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
`;

const SidebarList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 60px;
`;

const SidebarItem = styled.li`
  padding: 15px 20px;
  border-bottom: 1px solid #444;

  &:hover {
    background-color: #444;
  }
`;

const SidebarLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <OpenButton onClick={toggleSidebar} isOpen={isOpen}>&#9776;</OpenButton>
      <SidebarContainer isOpen={isOpen}>
        <SidebarList>
          <SidebarItem><SidebarLink to="/" onClick={toggleSidebar}>Home</SidebarLink></SidebarItem>
          <SidebarItem><SidebarLink to="/about" onClick={toggleSidebar}>About</SidebarLink></SidebarItem>
          <SidebarItem><SidebarLink to="/services" onClick={toggleSidebar}>Services</SidebarLink></SidebarItem>
          <SidebarItem><SidebarLink to="/portfolio" onClick={toggleSidebar}>Portfolio</SidebarLink></SidebarItem>
          <SidebarItem><SidebarLink to="/contact" onClick={toggleSidebar}>Contact</SidebarLink></SidebarItem>
        </SidebarList>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;