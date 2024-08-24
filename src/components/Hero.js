import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/images/coal-mining-production-at-one-of-the-open-fields.jpg"; // Adjust this path as needed
import NavBar from "./Navbar";

const HeroContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const HeroContent = styled.div`
//   background-color: rgba(0, 0, 30, 0.6);
background-color: rgb(9, 18, 32); opacity: 0.7;
  //   padding: 2rem;
  height: 100vh;
  width: 100vw;
  //   border-radius: 10px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <NavBar />

      <HeroContent>
        <HeroTitle>Welcome to Coal Mining Solutions</HeroTitle>
        <HeroSubtitle>Powering the world with sustainable energy</HeroSubtitle>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
