import styled from "styled-components";

export const AusrüstungPageContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  max-width: 50%;
  min-height: 78vh;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  padding: 30px;

  @media screen and (max-width: 800px) {
    min-height: 80vh;
    max-width: unset;
    box-shadow: unset;
    border-radius: unset;
    padding: unset;
  }
`;

export const IntroContainer = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: 40px;

  @media screen and (max-width: 800px) {
      flex-direction: column;
      font-size: large;
  }   
  
`

export const TextSpanContainer = styled.span`
  text-align: justify;
  width: 100%;
  hyphens: auto; 
  word-wrap: break-word;
  overflow-wrap: break-word;
`