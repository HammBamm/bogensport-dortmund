import React from 'react';
import { useHistory } from 'react-router';

import { ReactComponent as FbookLogo } from '../../assets/header/facebook-6.svg';
import { ReactComponent as BSLogo } from '../../assets/header/BSLogo.svg';
import { ReactComponent as BackSymbol } from '../../assets/header/backSymbol.svg';

import { 
  HeaderContainer,
  LogosContainer,
  LogoContainer2,
  OptionsContainer,
  OptionLink,
  BackButtonContainer } from './header.styles';

const Header = () => {
  const history = useHistory();
  return (
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
      <BackButtonContainer>
        <BackSymbol onClick={() => history.goBack()} />
      </BackButtonContainer>
      <OptionLink to='/faq'>FAQ</OptionLink>
      <OptionLink to='/kontakt'>Kontakt</OptionLink>
      <OptionLink to={{ pathname: "https://de-de.facebook.com/Bogensport-Dortmund-314466415291746/" }} target="_blank">
        <FbookLogo />
      </OptionLink>
    </OptionsContainer>
  </HeaderContainer>
)};

export default Header;