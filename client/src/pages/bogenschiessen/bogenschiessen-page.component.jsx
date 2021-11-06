import React from 'react';

import { BogenPageContainer } from './bogenschiessen-page.styles';
import BogenschiessenDirectory from '../../components/directories/bogenschiessen-directory.component';

const BogenschiessenPage = () => (
  <BogenPageContainer>
    <BogenschiessenDirectory />
    {/* <img src={gif} alt="loading..." /> */}
  </BogenPageContainer>
)

export default BogenschiessenPage;