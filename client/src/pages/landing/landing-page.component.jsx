import React from 'react';

import { LandingPageContainer, LogoContainer, ButtonContainer, CustomButtonLandingPageContainer, LandingPageTextContainer, TargetContainer, WelcomeContainer, DivContainer } from './landing-page.styles';
import { ReactComponent as BogenSport } from '../../assets/header/BogensportDortmund.svg';
import { ReactComponent as Target } from '../../assets/landing-page/target.svg';
import useMediaQuery from '../../components/media-query/media-query.component';
import { GlobalStyleLanding } from '../../global.styles';

const LandingPage = () => {
  const isMobile = useMediaQuery('(max-width: 800px)');
    if(!isMobile) {
      return (
        <DivContainer>
        <GlobalStyleLanding />
        <LandingPageContainer to='/start'>
          <WelcomeContainer>
            <h2>
              In jenem Moment, in dem der Schütze noch ein letztes Mal einatmet, seinen Bogen locker in die Hand legt und die Sehne mit gespanntem Arm unter seinem Kinn verankert, befindet er sich in totaler Konzentration. Die kleinsten Abweichungen, ein noch so minimaler Abstand der Sehne zur Nasenspitze kann den aufliegenden federleichten Pfeil schnell ins Aus beschleunigen. Und je länger der Schütze zögert, umso schwieriger wird es für ihn, den Pfeil treffsicher in die Mitte zu befördern...<br/><br/>
              ... willkommen bei der Bogensportabteilung des TuS Scharnhorst
            </h2>
          
          </WelcomeContainer>
        </LandingPageContainer>
        </DivContainer>
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
        <ButtonContainer to='/start'>
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