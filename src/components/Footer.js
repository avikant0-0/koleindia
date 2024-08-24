import React from "react";
import styled from "styled-components";

// Footer Container
const FooterContainer = styled.footer`
  background-color: #0a0f1a; // Dark background color
  height: 200px; // Adjust based on your preference
  width: 100%;
  display: flex;
  justify-content: space-between; // To push content to the ends
  align-items: center; // Vertical alignment
  padding: 0 20px; // Padding for spacing on both sides
  color: white; // Text color
`;

// Left Section (Logo or Title)
const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  font-size: 3rem; // Adjust the font size
`;

// Right Section (Text and Link)
const FooterRight = styled.div`
  font-size: 2rem; // Adjust the font size
  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline; // Underline on hover
    }
  }
    margin-right:40px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <span>&#9745; KoleIndia</span> {/* Checkmark symbol with text */}
      </FooterLeft>
      <FooterRight>
        <span>Made by <a href="" target="_blank" rel="noopener noreferrer">Team Nimbus </a></span>
      </FooterRight>
    </FooterContainer>
  );
};

export default Footer;
