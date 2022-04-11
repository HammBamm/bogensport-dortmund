import styled from "styled-components";

export const KalenderPageContainer = styled.div`
  min-height: 78vh;
  margin: auto auto;
  max-width: 60%;
  display: flex;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  padding: 10px;

  @media screen and (max-width: 800px) {
    min-height: 80vh;
    max-width: unset;
    flex-direction: column;
    box-shadow: unset;
    border-radius: unset;
    padding: unset;
  }
`;