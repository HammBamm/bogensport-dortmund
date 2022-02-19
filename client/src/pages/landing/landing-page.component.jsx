import React from 'react';
import { LandingPageContainer, LogoContainer, ButtonContainer, CustomButtonLandingPageContainer } from './landing-page.styles';
import { ReactComponent as BogenSport } from '../../assets/header/BogensportDortmund.svg';
import { ReactComponent as Target } from '../../assets/landing-page/target.svg';

const LandingPage = () => (
    <LandingPageContainer>
      
        <LogoContainer to='/menü'>
          <BogenSport />
         
        </LogoContainer>
        <ButtonContainer>
          <CustomButtonLandingPageContainer>
            <Target />
            Alle ins Gold!
          </CustomButtonLandingPageContainer>
        </ButtonContainer>
    </LandingPageContainer>
);

export default LandingPage;