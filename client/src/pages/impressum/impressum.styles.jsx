import styled from "styled-components";
import { Link } from "react-router-dom";
import { globalScheme } from "../../global.styles";

export const ImpressumPageContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 60%;
  text-align: start;
  min-height: 78vh;

  @media screen and (max-width: 800px) {
    min-height: 80vh;
    max-width: unset;
    align-items: center;
  }
`;

export const ImpressumPageImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 800px) {
    justify-content: unset;
    flex-direction: column;   
  }
`;

export const ImpressumLogoContainer = styled(Link)`
    padding: 20px 40px 0;
    max-width: 25%;
    display: flex;
    justify-content: flex-end;
    &:hover {
      fill: ${globalScheme.darkgreen};
    }
    
    @media screen and (max-width: 800px) {
      max-width: 50%;
      justify-content: center;
      margin: auto 0;
    }
`;