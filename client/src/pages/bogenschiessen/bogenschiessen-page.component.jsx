import React from 'react';

import gif from '../../assets/bogenschiessen/recurve2.gif'
import { BogenPageContainer } from './bogenschiessen-page.styles';


const BogenschiessenPage = () => (
  <BogenPageContainer>
    <img src={gif} alt="loading..." />
  </BogenPageContainer>
)

export default BogenschiessenPage;