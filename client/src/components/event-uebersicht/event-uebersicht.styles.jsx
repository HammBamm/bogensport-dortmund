import styled  from 'styled-components';
const theme = {
  background: "white",
  primary: "#008000",
  secondary: "#1effc3",
};

export const EventContainer = styled.div`
  min-width: 700px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: unset;
    min-width: unset;
  }
`;

export const EventContainerTitle = styled.h2`
  margin: 10px 0;

  @media screen and (max-width: 800px) {
    margin-bottom: 10px;
  }
`;

export const EventDetailsContainer = styled.div`
  font-size: large;
  font-weight: bolder;
  margin-top: 5px;

  @media screen and (max-width: 800px) {
    font-size: small;
  }
`;

export const EventItemContainer = styled.div` 
  display: inline-grid;
  justify-items: start;
  grid-template-columns: 3% 36% 60%;
  grid-gap: 10px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    grid-gap: 5px;
    grid-template-columns: 5% 35% 60%;
  }
`;

export const EventTargetContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const DateContainer = styled.span`
`
  
export const DescriptionContainer = styled.span`
  color: ${theme.primary};
`
