import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion'
import { LandingPageContainer, LogoContainer } from './landing-page.styles';
import { ReactComponent as BogenSport } from '../../assets/header/BogensportDortmund.svg';

const LandingPage = () => (
    
    <LandingPageContainer>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onTap={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <LogoContainer to='/menü'>
          <BogenSport />
      </LogoContainer>
      </ motion.div>
    </LandingPageContainer>
    
);

export default LandingPage;