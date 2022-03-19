import styled from 'styled-components';
import { globalScheme } from '../../global.styles';

export const MenuItemContainer = styled.div`
	height: ${({ size }) => (size ? '380px' : '240px')};
	min-width: 30%;
	flex: 1 1 auto;
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	border: 3px solid ${globalScheme.darkgreen};
	margin: 0 7.5px 15px;

	&:hover {
		cursor: pointer;
		/* & .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		} */
		& .content {
			opacity: 0.9;
		}
	}
	&:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
  @media screen and (max-width: 800px) {
    height: 200px;

    .content {
			opacity: 0.9;
		}
  }
`;

export const SmallMenuItemContainer = styled.div`
	height: ${({ size }) => (size ? '340px' : '240px')};
	min-width: 45%;
	flex: 1 1 auto;
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	border: 3px solid ${globalScheme.darkgreen};
	margin: 0 7.5px 15px;

	&:hover {
		cursor: pointer;
		/* & .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		} */
		& .content {
			opacity: 0.9;
		}
	}
	&:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
  @media screen and (max-width: 800px) {
    height: 200px;

    .content {
			opacity: 0.9;
		}
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
  padding: 5px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  position: absolute;

  @media screen and (max-width: 800px) {
    padding 0 10px;
  }
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  font-size: 22px;

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;

  @media screen and (max-width: 800px) {
    font-size: 10px;
  }
`;
        