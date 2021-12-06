import styled from "styled-components";

export const BogenPageContainer = styled.div`
  display: flex;
  height: 78vh;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 800px) {
    height: 82vh;
  }
`;