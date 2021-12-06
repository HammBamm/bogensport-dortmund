import styled from 'styled-components';

export const KalenderContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 350px;
  }
`;

export const KalenderTitle = styled.h2`
  margin: 10px 0;

  @media screen and (max-width: 800px) {
    margin-bottom: 20px;
  }
`;
