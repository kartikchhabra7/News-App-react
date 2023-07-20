import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #f2f2f2;
  padding: 14px;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 14px;
  font-weight: 700;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #333;
`;

const DeveloperName = styled.span`
  font-weight: bold;
  color: #ff4081;
`;


const Footer = () => {
  const developerName = "Kartik Chhabra";
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <FooterText>
        Made with ❤️ by <DeveloperName>{developerName} | {currentYear}</DeveloperName>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
