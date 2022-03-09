import styled from "styled-components";
import { Link } from "react-router-dom";
import { globalScheme } from "../../global.styles";

export const ImpressumPageContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  text-align: start;
  min-height: 78vh;

  @media screen and (max-width: 800px) {
    min-height: 80vh;
    width: unset;
  }
`;

export const ImpressumPageImgContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export const ImpressumLogoContainer = styled(Link)`
    padding: 20px 40px 0;
    width: 22%;
    display: flex;
    justify-content: flex-end;
    &:hover {
      fill: ${globalScheme.darkgreen};
    }
    
    @media screen and (max-width: 800px) {
      display: block;
      width: 100%;
      margin: auto 0;
    }
`;