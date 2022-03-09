import styled from "styled-components";

export const BogenPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 78vh;

  @media screen and (max-width: 800px) {
    min-height: 80vh;
  }
`;