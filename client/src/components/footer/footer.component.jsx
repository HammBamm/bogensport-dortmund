import React from 'react';

import { 
  FooterContainer,
  FooterOptionContainer,
  FooterOptionLinkContainer,
  CopyrightContainer,
  Copyright
 } from './footer.styles';

const Footer = () => (
  <FooterContainer>
    <FooterOptionContainer>
      <FooterOptionLinkContainer to='/impressum'>Impressum</FooterOptionLinkContainer>
      <FooterOptionLinkContainer to='/anmelden'>Anmelden</FooterOptionLinkContainer>
    </FooterOptionContainer>
    <CopyrightContainer>
      <Copyright>&#169; {'2021 Bogensport Dortmund'.toUpperCase()}</Copyright>
    </CopyrightContainer>
  </FooterContainer>
);

export default Footer;