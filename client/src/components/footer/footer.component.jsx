import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { 
  FooterContainer,
  FooterOptionContainer,
  FooterOptionLinkContainer,
  CopyrightContainer,
  Copyright,
  FooterLandingPageContainer
 } from './footer.styles';

const Footer = () => {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  if(location !== '') {
  return (
    <FooterContainer>
      <FooterOptionContainer>
        <FooterOptionLinkContainer to='/impressum'>Impressum</FooterOptionLinkContainer>
        {/* <FooterOptionLinkContainer to='/anmelden'>Anmelden</FooterOptionLinkContainer> */}
      </FooterOptionContainer>
      <CopyrightContainer>
        <Copyright>&#169; {'2022 Bogensport Dortmund'.toUpperCase()}</Copyright>
      </CopyrightContainer>
    </FooterContainer>
  )} else {
    return (
    <FooterLandingPageContainer>
    </FooterLandingPageContainer>
    )
  }
};

export default Footer;