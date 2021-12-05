import styled from "styled-components";

export const SportanlageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const MapContainer = styled.div`
  display: flex;
  width: 60%;
  padding: 10px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;

export const LegendOptionContainer = styled.div`
  padding: 10px;
`;
