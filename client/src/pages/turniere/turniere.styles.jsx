import styled from "styled-components";

export const TurnierePageContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  min-height: 78vh;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  padding: 10px;

  @media screen and (max-width: 800px) {
    min-height: 80vh;
    width: unset;
    box-shadow: unset;
    border-radius: unset;
    padding: unset;
  }
`;