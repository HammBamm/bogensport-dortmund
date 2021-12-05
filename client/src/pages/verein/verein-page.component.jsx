import React from 'react';

import { VereinPageContainer } from './verein-page.styles';
import VereinDirectory from '../../components/directories/verein-directory.component';

const VereinPage = () => (
  <VereinPageContainer>
    <VereinDirectory />
    {/* <img src={gif} alt="loading..." /> */}
  </VereinPageContainer>
)

export default VereinPage;