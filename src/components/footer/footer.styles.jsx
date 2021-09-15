import styled from "styled-components";

export const FooterContainer = styled.div` 
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 25px;

  @media screen and (max-width: 800px) {
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

export const FooterOptionLinkContainer = styled.span`
  padding: 10px;
  cursor: pointer;
  justify-content: flex-start;

  @media screen and (max-width: 800px) {
    padding: 10px;
}
`;

export const CopyrightContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
`;