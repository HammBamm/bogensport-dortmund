import styled from "styled-components";
import { Link } from "react-router-dom";
import { globalScheme } from "../../global.styles";

export const BeiträgePageContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  text-align: start;
  min-height: 78vh;
  font-size: large;

  @media screen and (max-width: 800px) {
    min-height: 80vh;
    width: unset;
  }
`;

export const BeiträgePageImgContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export const BeiträgeLogoContainer = styled(Link)`
    padding: 20px 40px 0;
    justify-content: flex-end;
    margin: auto auto;
    display: flex;
    max-width: 300px;
    max-height: 150px;
    &:hover {
      fill: ${globalScheme.darkgreen};
    }

    @media screen and (max-width: 800px) {
      margin: auto;
    }
`;