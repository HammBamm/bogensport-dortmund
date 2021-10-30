import React from 'react';

import { ReactComponent as TUSLogo } from '../../assets/header/tus-scharnhorst2.svg';
import { ReactComponent as FbookLogo } from '../../assets/header/facebook-6.svg';
import { ReactComponent as BSLogo } from '../../assets/header/BSLogo.svg';

import { 
  HeaderContainer,
  LogosContainer,
  LogoContainer,
  LogoContainer2,
  OptionsContainer,
  OptionLink } from './header.styles';

const Header = () => (
  <HeaderContainer>
    {/* <LogosContainer>
      <LogoContainer to={{ pathname: "http://www.tusscharnhorst.de/" }} target="_blank">
        <TUSLogo/>
      </LogoContainer>
    </LogosContainer> */}
    <LogosContainer>
      <LogoContainer2 to='/'>
          <BSLogo />
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