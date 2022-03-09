import React from 'react';
import { useHistory } from 'react-router';
import { useLocation } from "react-router-dom";

import { ReactComponent as FAQ } from '../../assets/header/faqs2.svg';
import { ReactComponent as InstaLogo } from '../../assets/header/icons8-instagram.svg';
import { ReactComponent as BSLogo } from '../../assets/header/BSLogo.svg';
import { ReactComponent as BackSymbol } from '../../assets/header/backSymbol.svg';
import { ReactComponent as Bogensport } from '../../assets/header/BogensportDortmund.svg';

import { 
  HeaderContainer,
  LogoContainer1,
  OptionsContainer,
  OptionLink,
  BackButtonContainer,
  LogoWrapper1,
  LogoWrapper2,
  LogoContainer2,
  WelcomeContainer,
  H1Container,
  H2Container,
} from './header.styles';

const Header = () => {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const history = useHistory();
  if(location !== '') {
    return (
      <HeaderContainer>
        <LogoWrapper1>
          <LogoContainer1 to='/menü'>
              <svg><BSLogo /></svg>
          </LogoContainer1>
        </LogoWrapper1>
        <LogoWrapper2>
          <LogoContainer2 to='/'>
              <svg><Bogensport /></svg>
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
    )
  } else {
    return (
      <HeaderContainer>
        <LogoWrapper1>
          <LogoContainer1 to='/menü'>
              <svg><BSLogo /></svg>
          </LogoContainer1>
        </LogoWrapper1>
        <WelcomeContainer>
          <H1Container>Willkommen auf Bogensport-Dortmund.de</H1Container>
          <H2Container>Eine Abteilung des TuS Scharnhorst 1895/1926 e.V</H2Container>
        </WelcomeContainer>
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
    )
  }

};

export default Header;