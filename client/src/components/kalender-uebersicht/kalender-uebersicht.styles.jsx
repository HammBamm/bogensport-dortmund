import styled from 'styled-components';

export const KalenderContainer = styled.div`
  min-width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    min-width: 350px;
    margin-bottom: 20px;
  }
`;

export const KalenderTitle = styled.h2`
  margin: 10px 0;

  @media screen and (max-width: 800px) {
    margin-bottom: 10px;
  }
`;
