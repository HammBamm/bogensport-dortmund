import styled from "styled-components";

export const KalenderPageContainer = styled.div`
  min-height: 78vh;
  margin: auto auto;
  display: flex;

  @media screen and (max-width: 800px) {
    min-height: unset;
    flex-direction: column;
  }
`;