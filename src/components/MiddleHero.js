import React from "react";
import styled from "styled-components";

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
          <ServiceImage src="https://media.gettyimages.com/id/1941416412/photo/confident-asian-two-maintenance-engineers-man-inspection-discussstion-with-tablet-at.jpg?b=1&s=2048x2048&w=0&k=20&c=mzlap0dbJ13b6ehBY9nwRDKdZfagbbwBJgL35Z0hjeU=" alt="Daily Shift Reports" />
          <ServiceText>
            <ServiceTitle>Daily Shift Reports</ServiceTitle>
            <ServiceDescription>
              Track and review daily operations. Get a detailed report every shift, keeping you informed and updated.
            </ServiceDescription>
          </ServiceText>
        </ServiceCard>
        
        <ServiceCard>
          <ServiceImage src="https://media.gettyimages.com/id/1969071961/photo/portrait-senior-electrician-engineer-man-wear-white-hardhat-at-power-station-electrical-plant.jpg?b=1&s=2048x2048&w=0&k=20&c=PO_XXhW15NfmXpena8QF6qCCGoTRALelxMg1yd88WJE=" alt="Task Management" />
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
          <ServiceImage src="https://media.gettyimages.com/id/1283836460/photo/safety-first.jpg?b=1&s=2048x2048&w=0&k=20&c=CzJkKwNerajt35Porg7tnToYEoPblncnTfZRM5rTIcc=" alt="Safety Protocol Updates" />
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