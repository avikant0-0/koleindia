import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import backgroundImage from "../assets/images/coal-mining-production-at-one-of-the-open-fields.jpg";
import NavBar from "./Navbar";
import Sidebar from "./Sidebar";
import MiddleHero from "./MiddleHero";
import Footer from "./Footer";

// Global style to remove default margins and padding
const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow-x: hidden;  // Disable horizontal overflow
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HeroContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  color: white;
  position: relative;
`;

const HeroContent = styled.div`
  background-color: rgba(9, 18, 32, 0.7);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  opacity: 0;
  animation: ${fadeIn} 2s ease-in forwards;
`;

const MiddleHeroContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #121f37;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Hero = () => {
  const [displayedText, setDisplayedText] = useState(""); 
  const fullText = "Streamline Shift Handover & Safety Protocol";

  useEffect(() => {
    let currentIndex = 0;
    const typingEffect = setInterval(() => {
      if (currentIndex < fullText.length - 1) {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingEffect);
      }
    }, 80);

    return () => clearInterval(typingEffect);  
  }, []);

  return (
    <>
      <GlobalStyle />
      <HeroContainer>
        <NavBar />
        <Sidebar />
        <HeroContent>
          <HeroTitle>{displayedText}</HeroTitle>
          <HeroSubtitle>
            Improve your shift handover process with ease. Keep everyone updated, track progress, and ensure smoother transitions.
          </HeroSubtitle>
        </HeroContent>
      </HeroContainer>
      
      <MiddleHeroContainer>
        <MiddleHero />
      </MiddleHeroContainer>
      <Footer/>
    </>
  );
};

export default Hero;