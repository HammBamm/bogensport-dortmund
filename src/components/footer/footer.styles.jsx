import styled from "styled-components";

export const FooterContainer = styled.div` 
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 25px;

  @media screen and (max-width: 800px) {
      height: 60px;
      padding: 10px;
      margin-top: 20px;
  }
`;

export const FooterOptionContainer = styled.div` 
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
      width: 80%;
  }
`;

export const FooterOptionLinkContainer = styled.span`
  padding: 10px 15px;
  cursor: pointer;
  
  justify-content: flex-start;
`;

export const CopyrightContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px 15px;
`;