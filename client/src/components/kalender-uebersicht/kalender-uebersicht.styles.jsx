import styled from 'styled-components';
import { globalScheme } from '../../global.styles';

export const KalenderContainer = styled.div`
  min-width: 380px;
  display: flex;
  flex-direction: column;

  .highlightTraining {
    background: ${globalScheme.darkgreen};
    color: white;
  }
  
  @media screen and (max-width: 800px) {
    min-width: 320px;
    max-width: 340px;
    margin: auto;
    margin-bottom: 20px;
  }
`;

export const KalenderTitle = styled.h2`
  margin: 10px 0;

  @media screen and (max-width: 800px) {
    font-size: 22px;
    display: flex;
    margin-bottom: 10px;
  }
`;
