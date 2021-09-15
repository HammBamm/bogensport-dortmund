import React from 'react';

import { ReactComponent as TUSLogo } from '../../assets/header/tus-scharnhorst2.svg';

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
      <OptionLink to='/verein'>Unser Verein</OptionLink>
      <OptionLink to='/kontakt'>Kontakt</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;