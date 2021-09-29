import styled  from 'styled-components';

const theme = {
  background: "white",
  primary: "#ff1ead",
  secondary: "#1effc3",
  cardsize: "300px"
};

export const CardContainer = styled.div`
  width: calc(${theme.cardsize} * 1.586);
  height: var(${theme.cardsize});
  
  border-radius: 0.75rem;
  box-shadow:  0 22px 70px 4px rgba(0,0,0,0.56), 0 0 0 1px rgba(0, 0, 0, 0.3);
  
  background: darkgrey;
  
  display: grid;
  grid-template-columns: 40% auto;
  color: white;
  
  align-items: center;
  
  will-change: transform;
  transition: transform 0.25s cubic-bezier(0.4, 0.0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0.0, 0.2, 1);
  
  &:hover {
     transform: scale(1.1);
     box-shadow:  0 32px 80px 14px rgba(0,0,0,0.36), 0 0 0 1px rgba(0, 0, 0, 0.3);
  }
`;

export const CardDetailsContainer = styled.div`
  padding: 1rem;
`;

export const NameContainer = styled.div`
  font-size: 1.25rem;
`

export const LocationContainer = styled.div`
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