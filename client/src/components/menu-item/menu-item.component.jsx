import React from 'react';
import { withRouter } from 'react-router';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, outUrl , match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => linkUrl==="" ? window.open(outUrl, '_blank') : history.push(`${linkUrl}`)}
  >
    <BackgroundImageContainer
      className='background-image'
      imageUrl={imageUrl}
    />
    <ContentContainer className='content'>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
    </ContentContainer>
  </MenuItemContainer>
);


export default withRouter(MenuItem);