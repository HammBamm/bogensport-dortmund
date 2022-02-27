import styled  from 'styled-components';
import { globalScheme } from '../../global.styles';

const theme = {
  background: "white",
  primary: "#008000",
  secondary: "#1effc3",
  cardsize: "350px"
};

export const EventContainer = styled.div`
  min-width: 500px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 350px;
  }
`;

export const EventContainerTitle = styled.h2`
  margin: 10px 0;
  @media screen and (max-width: 800px) {
    margin-bottom: 20px;
  }
`;

export const EventDetailsContainer = styled.div`
  font-size: large;
  margin-top: 5px;
`;

export const EventItemContainer = styled.div` 
  display: grid;
  grid-template-columns: 0.2fr 2fr 2fr;
  grid-gap: 14px;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    border-radius: 0.75rem;
    border-color: ${ globalScheme.darkgreen };
  }
  &:click {
    text-decoration: underline;
  }
`;

export const EventTargetContainer = styled.div`
  width: 25px;
`

export const DateContainer = styled.span`
`
  
export const DescriptionContainer = styled.span`
  color: ${theme.primary};
`
