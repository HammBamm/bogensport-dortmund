import styled from "styled-components";
import { Link } from "react-router-dom";
import { globalScheme } from "../../global.styles";

export const FooterContainer = styled.div` 
  width: 100%;
  height: 40px;
  display: flex;
  margin-top: 25px;
  border-top: 3px solid ${globalScheme.darkgreen};

  @media screen and (max-width: 800px) {
      position: relative;
      height: 30px;
      margin-top: 10px;
      font-size: 11px;
  }
`;

export const FooterOptionContainer = styled.div` 
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 45%;
  }
`;

export const FooterOptionLinkContainer = styled(Link)`
  padding: 10px;
  cursor: pointer;
  justify-content: flex-start;

  @media screen and (max-width: 800px) {
    padding: 10px;
}
`;

export const CopyrightContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  

  @media screen and (max-width: 800px) {
    padding: 10px;
    width: 60%
}
`;

export const Copyright = styled.span`
  padding: 10px;

  @media screen and (max-width: 800px) {
    padding: 0;
}
`;

