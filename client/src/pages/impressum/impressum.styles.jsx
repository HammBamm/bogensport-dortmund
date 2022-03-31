import styled from "styled-components";
import { Link } from "react-router-dom";
import { globalScheme } from "../../global.styles";

export const ImpressumPageContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 45%;
  text-align: start;
  min-height: 78vh;
  font-size: large;

  @media screen and (max-width: 800px) {
    min-height: 80vh;
    max-width: unset;
  }
`;

export const ImpressumWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    display: block;
  }
`

export const ImpressumPageImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 800px) {
    justify-content: unset;
    align-items: unset;
    flex-direction: column;   
  }
`;

export const ImpressumLogoContainer = styled(Link)`
    max-width: 15%;
    display: flex;
    justify-content: flex-end;
    &:hover {
      fill: ${globalScheme.darkgreen};
    }
    
    @media screen and (max-width: 800px) {
      max-width: 30%;
      margin: auto 0;
    }
`;