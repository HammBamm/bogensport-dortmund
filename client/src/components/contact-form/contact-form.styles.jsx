import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { globalScheme } from '../../global.styles';

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

export const FallbackContainer = styled.span`
  display: flex;
  max-width: 650px;
  margin: auto auto;

  @media screen and (max-width: 800px) {
    font-size: small;
  }
`

export const ClipboardButtonContainer = styled.button`
  pointer-events: auto;
  max-width: 70px;
  max-height: 70px;
  cursor: pointer;
`

export const ClipboardContainer = styled.img`
  display: flex;
  max-width: 50px;
  max-height: 50px;
`

export const EmailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${globalScheme.darkgreen};
`

export const DivWrapper = styled.div`
  pointer-events: ${({ isFallbacked }) => (isFallbacked === true ? 'none' : '')};

  h1 {
    text-align: center;
    color: #222;
  }

  & > div {
  }

  a {
    display: block;
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
        max-width: 110px;
        min-width: 100px;
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

export const BSLogoContainer = styled.div`
  display: flex;
  max-width: 160px;
  max-height: 80px;
`

export const LinkContainer = styled(Link)`
  pointer-events: auto;
`;

export const BackContainer = styled.button`
  display: flex;
  justify-content: space-between;
  margin: 40px auto;
  cursor: pointer;

  &:hover {
    fill: ${globalScheme.darkgreen};
    color: ${globalScheme.darkgreen};
  }
`

export const BackTextContainer = styled.span`
  padding-left: 20px;
`