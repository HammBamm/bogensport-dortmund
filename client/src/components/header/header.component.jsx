import React from 'react';
import { useHistory } from 'react-router';

import { ReactComponent as FAQ } from '../../assets/header/faqs2.svg';
import { ReactComponent as InstaLogo } from '../../assets/header/icons8-instagram.svg';
import { ReactComponent as BSLogo } from '../../assets/header/BSLogo.svg';
import { ReactComponent as BackSymbol } from '../../assets/header/backSymbol.svg';
import { ReactComponent as BogenSport } from '../../assets/header/BogensportDortmund.svg';

import { 
  HeaderContainer,
  LogoContainer1,
  LogoContainer2,
  OptionsContainer,
  OptionLink,
  BackButtonContainer,
  LogoWrapper1,
  LogoWrapper2, 
} from './header.styles';

const Header = () => {
  const history = useHistory();
  return (
  <HeaderContainer>
    <LogoWrapper1>
      <LogoContainer1 to='/menü'>
          <svg><BSLogo /></svg>
      </LogoContainer1>
    </LogoWrapper1>
    <LogoWrapper2>
      <LogoContainer2 to='/'>
          <svg><BogenSport /></svg>
      </LogoContainer2>
    </LogoWrapper2>
    <OptionsContainer>
      <BackButtonContainer>
        <BackSymbol onClick={() => history.goBack()} />
      </BackButtonContainer>
      <OptionLink to='/faq'>
        <FAQ></FAQ>
      </OptionLink>
      <OptionLink to={{ pathname: "https://de-de.facebook.com/Bogensport-Dortmund-314466415291746/" }} target="_blank">
        <InstaLogo />
      </OptionLink>
    </OptionsContainer>
  </HeaderContainer>
)};

export default Header;