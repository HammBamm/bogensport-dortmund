import styled  from 'styled-components';

const theme = {
  background: "white",
  primary: "#008000",
  secondary: "#1effc3",
  cardsize: "350px"
};

export const CardContainer = styled.div`
  border-radius: 0.75rem;
  border-color: ${ theme.primary };
  max-width: ${ theme.cardsize };
	overflow: hidden;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	overflow: hidden;
  background: white;

  grid-template-columns: 30% auto;
  color: black;
  
  will-change: transform;
  transition: transform 0.25s cubic-bezier(0.4, 0.0, 0.2, 1);
  
  &:hover {
     transform: scale(1.1);
  }

  @media screen and (max-width: 800px) {
    max-width: 300px;
  }
`;

export const CardDetailsContainer = styled.div`

`;

export const NameContainer = styled.div`
  font-size: 1.25rem;
`

export const SeasonContainer = styled.div`
font-weight: 600;
  color: ${theme.primary};
`;

export const CardAvatarContainer = styled.div`
  display: grid;
  place-items: center;
`;

export const CardAboutContainer = styled.div`
  margin-top: 5px;
  display: grid;
  grid-auto-flow: column;
`;

export const CardAboutItemContainer = styled.div` 
  display: flex;
  flex-direction: column;
  padding: 5px 5px 5px 0;
`;

export const ValueContainer = styled.span`
  font-size: 1rem;
  padding-bottom: 10px;
`
  
export const LabelContainer = styled.span`
  position: absolute;
  bottom: 5px;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${theme.primary};
`

export const SVGContainer = styled.div`
  fill: white;
  display: flex;
  max-width: 65%;
`;