import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { globalScheme } from '../../global.styles';

export const FallbackContainer = styled.span`
  display: flex;
  max-width: 650px;

  span {
    color: ${globalScheme.darkgreen};
    font-size: 2.5vh;
  }

`

export const ClipboardButtonContainer = styled.button`
  pointer-events: auto;
  display: flex;
  max-width: 70px;
  max-height: 70px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    max-height: 90px;
  }
`

export const ClipboardContainer = styled.img`
  display: flex;
  max-width: 50px;
  max-height: 50px;

  @media screen and (max-width: 800px) {
    justify-content: space-around;
  }
`

export const ClipboardWrapper = styled.div`
  display: flex;
  min-width: 180px;
  max-width: 180px;
  justify-content: space-around;
`;

export const EmailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;

  @media screen and (max-width: 800px) {
    justify-content: space-around;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`

export const DivWrapper = styled.div`
  max-width: 700px;
  margin: 10px auto;
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  overflow: hidden;
  h1 {
    text-align: center;
    color: #222;
  }

  a {
    display: block;
    color: #222;
  }

`

export const LinkContainer = styled(Link)`
  pointer-events: auto;
`;

export const BackContainer = styled.button`
  display: flex;
  max-width: 300px;
  max-height: 100px;
  margin: 40px auto;
  cursor: pointer;
  

  h3 {
    font-size: 1.5vh;
  }

  &:hover {
    fill: ${globalScheme.darkgreen};
    color: ${globalScheme.darkgreen};
  }
`

export const BSLogoContainer = styled.div`
  display: flex;
  margin: auto;
  padding: 20px;
  max-width: 250px;
  max-height: 90px;
`

export const BackTextContainer = styled.span`
  margin: auto;
  padding-left: 20px;
`