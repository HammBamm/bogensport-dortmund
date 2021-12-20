import React from 'react';

import { BogenPageContainer } from './bogenschiessen-page.styles';
import BogenschiessenDirectory from '../../components/directories/bogenschiessen-directory.component';

const BogenschiessenPage = () => (
  <BogenPageContainer>
    <BogenschiessenDirectory />
  </BogenPageContainer>
)

export default BogenschiessenPage;