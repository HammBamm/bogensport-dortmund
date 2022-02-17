import React from 'react';
import { motion} from 'framer-motion/dist/framer-motion'
import { LandingPageContainer, LogoContainer } from './landing-page.styles';
import { ReactComponent as BogenSport } from '../../assets/header/BogensportDortmund.svg';

const LandingPage = () => (
    <motion.div
      animate={{ opacity: 0 }}
      transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: 2 }}
    >
    <LandingPageContainer>
      <LogoContainer to='/menü'>
          <BogenSport />
      </LogoContainer>
    </LandingPageContainer>
    </ motion.div>
);

export default LandingPage;