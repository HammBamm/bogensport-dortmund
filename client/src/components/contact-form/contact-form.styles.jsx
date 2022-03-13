import styled, { css } from 'styled-components';
import { globalScheme } from '../../global.styles';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -25px;
  font-size: 16px;
  color: ${mainColor};
`;

export const ContactFormContainer = styled.div`
  margin: auto auto;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  
  @media screen and (max-width: 800px) {
    margin: unset;
    
    width: unset;
    align-items: center;
    
  }
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

export const FallbackContainer = styled.span`
display: flex;
max-width: 600px;
  margin: auto auto;
`

export const ClipboardButtonContainer = styled.button`
  cursor: pointer;
`

export const ClipboardContainer = styled.img`
  display: flex;
  max-width: 40px;
  max-height: 40px;
`

export const EmailContainer = styled.span`
  color: ${globalScheme.darkgreen};
`

export const DivWrapper = styled.div`

  h1 {
    text-align: center;
    color: #222;
  }

  & > div {
    text-align: center;
  }

  a {
    display: block;
    text-align: center;
    color: #222;
  }

  form {
    max-width: 700px;
    margin: 10px auto;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 3px;

    & > div {
      display: flex;
      flex-flow: row nowrap;
      line-height: 2em;
      margin: 5px;
      & > label {
        color: #333;
        width: 110px;
        font-size: 1em;
        line-height: 32px;
      }
      & > input,
      & > select,
      & > textarea {
        flex: 1;
        padding: 3px 5px;
        font-size: 1em;
        margin-left: 15px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
      & > input[type='checkbox'] {
        margin-top: 7px;
      }
      & > div {
        margin-left: 16px;
        & > label {
          display: block;
          & > input {
            margin-right: 3px;
          }
        }
      }
    }
    & > .buttons {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      margin-top: 15px;
    }
    pre {
      border: 1px solid #ccc;
      background: rgba(0, 0, 0, 0.1);
      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
      padding: 20px;
    }
  }
`