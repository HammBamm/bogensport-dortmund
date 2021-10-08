import React from 'react';

import { ReactComponent as TUSLogo } from '../../assets/header/tus-scharnhorst2.svg';
import { ReactComponent as FbookLogo } from '../../assets/header/facebook-6.svg';
import BSLogo from '../../assets/header/tuslogo3.jpg';

import { 
  HeaderContainer,
  LogosContainer,
  LogoContainer,
  LogoContainer2,
  OptionsContainer,
  OptionLink } from './header.styles';

const Header = () => (
  <HeaderContainer>
    <LogosContainer>
      <LogoContainer to={{ pathname: "http://www.tusscharnhorst.de/" }} target="_blank">
        <TUSLogo/>
      </LogoContainer>
      <LogoContainer2 to='/'>
        <img src={BSLogo} alt="Bogensport Dortmund Logo"/>
      </LogoContainer2>
    </LogosContainer>
    <OptionsContainer>
      <OptionLink to='/'>Startseite</OptionLink>
      <OptionLink to='/faq'>FAQ</OptionLink>
      <OptionLink to='/kontakt'>Kontakt</OptionLink>
      <OptionLink to={{ pathname: "https://de-de.facebook.com/Bogensport-Dortmund-314466415291746/" }} target="_blank">
        <FbookLogo />
      </OptionLink>
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;