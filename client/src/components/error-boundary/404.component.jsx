import React from 'react';
import { Link } from 'react-router-dom';

import Dog from '../../assets/error/Dog_Ate-big.png';

import { 
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
  LinkTextContainer
 } from './error-boundary.styles';

 const MissingPage = () => {
  return (
    <ErrorImageOverlay>
      <ErrorImageContainer imageUrl={ Dog }></ErrorImageContainer>
      <ErrorImageText>
        404: Entschuldigung, aber mein Hund hat wohl die Seite gefressen. Zurück zur <Link to="/"><LinkTextContainer>Startseite.</LinkTextContainer></Link>
      </ErrorImageText>
    </ErrorImageOverlay>
  );
}

 export default MissingPage;
