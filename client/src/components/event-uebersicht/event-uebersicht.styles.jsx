import styled  from 'styled-components';

const theme = {
  background: "white",
  primary: "#008000",
  secondary: "#1effc3",
  cardsize: "350px"
};

export const EventContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

export const EventContainerTitle = styled.h2`
  margin: 10px 0;
`;

export const EventDetailsContainer = styled.div`
  margin-top: 5px;
`;

export const EventItemContainer = styled.div` 
  display: flex;
  padding-bottom: 10px;
`;

export const EventTargetContainer = styled.div`
  width: 25px;
  padding-left: 10px;
`

export const DateContainer = styled.span`
  padding-left: 10px;
`
  
export const DescriptionContainer = styled.span`
  padding-left: 10px;
  color: ${theme.primary};
`
