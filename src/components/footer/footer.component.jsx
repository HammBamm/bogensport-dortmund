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
      <FooterOptionLinkContainer>Impressum</FooterOptionLinkContainer>
      <FooterOptionLinkContainer>Administrator</FooterOptionLinkContainer>
    </FooterOptionContainer>
    <CopyrightContainer>
      <span className='copypasta'>&#169; {'2021 Bogensport Dortmund'.toUpperCase()}</span>
    </CopyrightContainer>
  </FooterContainer>
);

export default Footer;