import styled from 'styled-components';
import { globalScheme } from '../../global.styles';

export const ErrorImageOverlay = styled.div`
  min-height: 78vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    height: unset;
    min-height: 80vh;
    width: unset;
  }
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;

  @media screen and (max-width: 800px) {
    width: 40vh;
    height: 40vh;
  }
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
  color: #2f8e89;
`;

export const LinkTextContainer = styled.span`
  font-weight: bold;
  font-size: 28px;
  text-decoration: underline;
  color: #2f8e89;

  &:visited {
    color: ${globalScheme.darkgreen};
  }

  &:hover {
    ${globalScheme.darkgreen};
  }
`;