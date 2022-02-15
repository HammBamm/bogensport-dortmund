import styled from "styled-components";

export const SportanlageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 78vh;
  margin: auto auto;

  @media screen and (max-width: 800px) {
    height: unset;
  }
`;

export const MapContainer = styled.div`
  display: flex;
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
