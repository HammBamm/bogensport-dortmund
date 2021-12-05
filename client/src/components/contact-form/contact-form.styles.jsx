import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const ContactFormContainer = styled.div`
  margin: auto auto;
  
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;

export const FormWrapperContainer = styled.div`
  width: 80%;
  margin: auto auto;
  padding-bottom: 40px;
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