import React from "react";
import styled from "styled-components";
// import image1 from "../assets/images/image1.jpg"; // Placeholder image
// import image2 from "../assets/images/image2.jpg"; // Placeholder image
// import image3 from "../assets/images/image3.jpg"; // Placeholder image
import image1 from "../assets/images/WeirdOldGuy.jpg"
import image2 from "../assets/images/WeirdOldGuy.jpg"
import image3 from "../assets/images/WeirdOldGuy.jpg"
const Hero1Container = styled.div`
  background-color: #121f37;
  padding: 2rem;
`;

const Title = styled.h2`
  color: white;
  text-align: left;
  margin-bottom: 2rem;
  font-size:4rem;
  margin-left:100px;
`;

const ServicesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ServiceCard = styled.div`
  background-color: #0a101b;
  color: white;
  border-radius: 8px;
  overflow: hidden;
  width: 27%;
  text-align: left;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: auto;
`;

const ServiceText = styled.div`
  padding: 1.5rem;
`;

const ServiceTitle = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
`;

const MiddleHero = () => {
  return (
    <Hero1Container>
      <Title>Services</Title>
      <ServicesContainer>
        <ServiceCard style={{
            marginLeft:"100px",
        }}>
          <ServiceImage src={image1} alt="Daily Shift Reports" />
          <ServiceText>
            <ServiceTitle>Daily Shift Reports</ServiceTitle>
            <ServiceDescription>
              Track and review daily operations. Get a detailed report every shift, keeping you informed and updated.
            </ServiceDescription>
          </ServiceText>
        </ServiceCard>
        
        <ServiceCard>
          <ServiceImage src={image2} alt="Task Management" />
          <ServiceText>
            <ServiceTitle>Task Management</ServiceTitle>
            <ServiceDescription>
              Assign and monitor tasks with ease. Ensure everyone knows their responsibilities and deadlines.
            </ServiceDescription>
          </ServiceText>
        </ServiceCard>
        
        <ServiceCard style={{
            marginRight:"100px",
        }}>
          <ServiceImage src={image3} alt="Safety Protocol Updates" />
          <ServiceText>
            <ServiceTitle>Safety Protocol Updates</ServiceTitle>
            <ServiceDescription>
              Stay on top of safety requirements. Receive regular updates and ensure compliance with the latest rules.
            </ServiceDescription>
          </ServiceText>
        </ServiceCard>
      </ServicesContainer>
    </Hero1Container>
  );
};

export default MiddleHero;