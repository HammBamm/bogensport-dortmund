import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -20px;
  font-size: 14px;
  color: ${mainColor};
`;

export const ContactFormContainer = styled.div`
  margin: auto auto;
  
  @media screen and (max-width: 800px) {
    margin: unset;
    flex-direction: column;
    width: unset;
    align-items: center;
    
  }
`;

export const FormWrapperContainer = styled.div`
  width: 80%;
  margin: auto auto;
  padding-bottom: 10px;
`;

export const TextareaLabelContainer = styled.label`
  color: ${subColor};
  font-size: 16px;
  padding: 10px 10px 10px 5px;
  font-weight: normal;
  pointer-events: none;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabelStyles}
  }
`;