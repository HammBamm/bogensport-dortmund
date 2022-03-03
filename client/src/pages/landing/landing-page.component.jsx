import React from 'react';
import { LandingPageContainer, LogoContainer, ButtonContainer, CustomButtonLandingPageContainer, LandingPageTextContainer } from './landing-page.styles';
import { ReactComponent as BogenSport } from '../../assets/header/BogensportDortmund.svg';
import { ReactComponent as Target } from '../../assets/landing-page/target.svg';

const LandingPage = () => (
    <LandingPageContainer>
        <LandingPageTextContainer>
          <h1>Willkommen auf Bogensport-Dortmund.de </h1>
          <h2>Eine Abteilung des TuS Scharnhorst 1895/1926 e.V</h2>
        </LandingPageTextContainer>
        <LogoContainer>
          <svg><BogenSport /></svg>
        </LogoContainer>
        <ButtonContainer to='/menü'>
          <CustomButtonLandingPageContainer >
            <Target />
            <LandingPageTextContainer>
              Alle ins Gold!
            </LandingPageTextContainer>
          </CustomButtonLandingPageContainer>
        </ButtonContainer>
    </LandingPageContainer>
);

export default LandingPage;