import React from 'react';
import { withRouter } from 'react-router';

import {
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
  SmallMenuItemContainer
} from './menu-item.styles';

const SmallMenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <SmallMenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className='background-image'
      imageUrl={imageUrl}
    />
    <ContentContainer className='content'>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>KLICK MICH</ContentSubtitle>
    </ContentContainer>
  </SmallMenuItemContainer>
);


export default withRouter(SmallMenuItem);