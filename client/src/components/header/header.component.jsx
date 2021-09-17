import React from 'react';

import { ReactComponent as TUSLogo } from '../../assets/header/tus-scharnhorst2.svg';
import { ReactComponent as FbookLogo } from '../../assets/header/facebook-6.svg';

import { 
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink } from './header.styles';

const Header = () => (
  <HeaderContainer>
    <LogoContainer to={{ pathname: "http://www.tusscharnhorst.de/" }} target="_blank">
      <TUSLogo className='logo' />
    </LogoContainer>
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