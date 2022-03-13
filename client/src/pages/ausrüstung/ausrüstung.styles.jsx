import styled from "styled-components";

export const AusrüstungPageContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  max-width: 60%;
  min-height: 78vh;

  @media screen and (max-width: 800px) {
    min-height: 80vh;
    max-width: unset;
  }
`;