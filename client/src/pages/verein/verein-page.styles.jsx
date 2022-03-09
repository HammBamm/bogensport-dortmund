import styled from "styled-components";

export const VereinPageContainer = styled.div`
  display: flex;
  min-height: 78vh;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 800px) {
    min-height: 80vh;
  }
`;