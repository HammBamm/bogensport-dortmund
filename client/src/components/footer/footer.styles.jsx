import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div` 
  position: absolute;
  bottom: 0;
  width: 95%;
  height: 40px;
  display: flex;
  margin-top: 25px;

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
  right: 0px;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    padding: 10px;
    width: 60%
}
`;

export const Copyright = styled.span`
  padding: 10px;
`;

