import styled  from 'styled-components';

const theme = {
  background: "white",
  primary: "#ff1ead",
  secondary: "#1effc3",
  cardsize: "300px"
};

export const CardContainer = styled.div`
  border-radius: 0.75rem;
  background: darkgrey;
  min-width: 40%;
	overflow: hidden;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	overflow: hidden;

  grid-template-columns: 40% auto;
  color: white;
  
  will-change: transform;
  transition: transform 0.25s cubic-bezier(0.4, 0.0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0.0, 0.2, 1);
  
  &:hover {
     transform: scale(1.1);
  }
`;

export const CardDetailsContainer = styled.div`
  padding: 1rem;
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
  margin-top: 1rem;
  display: grid;
  grid-auto-flow: column;
`;

export const CardAboutItemContainer = styled.div` 
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
`;

export const ValueContainer = styled.span`
  font-size: 1rem;
`
  
export const LabelContainer = styled.span`
     margin-top: 0.15rem;
     font-size: 0.75rem;
     font-weight: 600;
     color: ${theme.primary};
     background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`

export const SVGContainer = styled.div`
  fill: white;
  width: 65%;
`;

/* .skills {
  display: flex;
  flex-direction: column;
  margin-top: 0.75rem;
  
  .label {
     font-size: 1rem;
     font-weight: 600;
     color: var(--primary);
  }
  
  .value {
     margin-top: 0.15rem;
     font-size: 0.75rem;
     line-height: 1.25rem;
  }
} */