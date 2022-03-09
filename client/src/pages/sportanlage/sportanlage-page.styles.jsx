import styled from "styled-components";

export const SportanlageContainer = styled.div`
  display: flex;
  min-height: 78vh;
  margin: auto auto;

  @media screen and (max-width: 800px) {
    min-height: 80vh;
  }
`;

export const MapContainer = styled.div`
  display: flex;
  margin: auto auto;
  padding: 10px;

  @media screen and (max-width: 800px) {
    padding: 10px 0 0 0;
    flex-direction: column;
    width: unset;
    align-items: center;
    > *:first-child {
      margin-bottom: 25px;
    }
  }
`;

export const LegendOptionContainer = styled.div`
  padding: 10px;
  @media screen and (max-width: 800px) {
    padding: 0 10px 0 0;
  }
`;
