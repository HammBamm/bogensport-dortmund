import styled from "styled-components";

export const EinstiegPageContainer = styled.div`
  min-height: 78vh;
  margin-left: auto;
  margin-right: auto;
  width: 70%;

  @media screen and (max-width: 800px) {
    min-height: 80vh;
    width: unset;
  }
`;