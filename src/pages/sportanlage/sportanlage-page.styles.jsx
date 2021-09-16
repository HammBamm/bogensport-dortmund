import styled from "styled-components";

export const SportanlageContainer = styled.div`
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const MapContainer = styled.div`
  display: flex;
  width: 70%;
  padding: 10px;

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;

export const LegendOptionContainer = styled.div`
  padding: 10px;
`;
