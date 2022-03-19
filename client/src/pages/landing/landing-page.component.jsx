import React from 'react';

import { LandingPageContainer, LogoContainer, ButtonContainer, CustomButtonLandingPageContainer, LandingPageTextContainer, TargetContainer, WelcomeContainer } from './landing-page.styles';
import { ReactComponent as BogenSport } from '../../assets/header/BogensportDortmund.svg';
import { ReactComponent as Target } from '../../assets/landing-page/target.svg';
import useMediaQuery from '../../components/media-query/media-query.component';
import { GlobalStyleLanding } from '../../global.styles';

const LandingPage = () => {
  const isMobile = useMediaQuery('(max-width: 800px)');
    if(!isMobile) {
      return (
        <div>
        <GlobalStyleLanding />
        <LandingPageContainer>
          <WelcomeContainer>
          </WelcomeContainer>
          <ButtonContainer to='/menü'>
            <CustomButtonLandingPageContainer >
              <TargetContainer>
                <svg><Target /></svg>
              </TargetContainer>
              <LandingPageTextContainer>
                Alle ins Gold!
              </LandingPageTextContainer>
            </CustomButtonLandingPageContainer>
          </ButtonContainer>
        </LandingPageContainer>
        </div>
    )
  } else {
    return (
      <LandingPageContainer>
        <WelcomeContainer>
          <h1>Willkommen auf Bogensport-Dortmund.de</h1>
          <h3>Bogensportabteilung des TuS Scharnhorst 1895/1926 e.V</h3>
          <LogoContainer>
            <svg><BogenSport /></svg>
          </LogoContainer>
        </WelcomeContainer>
        <ButtonContainer to='/menü'>
          <CustomButtonLandingPageContainer >
            <TargetContainer>
              <svg><Target /></svg>
            </TargetContainer>
            <LandingPageTextContainer>
              Alle ins Gold!
            </LandingPageTextContainer>
          </CustomButtonLandingPageContainer>
        </ButtonContainer>
      </LandingPageContainer>
    )
  }
};

export default LandingPage;