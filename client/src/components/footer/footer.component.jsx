import React from 'react';

import { 
  FooterContainer,
  FooterOptionContainer,
  FooterOptionLinkContainer,
  CopyrightContainer
 } from './footer.styles';

const Footer = () => (
  <FooterContainer>
    <FooterOptionContainer>
      <FooterOptionLinkContainer to='/impressum'>Impressum</FooterOptionLinkContainer>
      <FooterOptionLinkContainer to='/anmelden'>Anmelden</FooterOptionLinkContainer>
    </FooterOptionContainer>
    <CopyrightContainer>&#169; {'2021 Bogensport Dortmund'.toUpperCase()}</CopyrightContainer>
  </FooterContainer>
);

export default Footer;