import React from 'react';

import HomepageDirectory from '../../components/directories/homepage-directory.component';
import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
    <HomePageContainer>
        <HomepageDirectory></HomepageDirectory>
    </HomePageContainer>
);

export default HomePage;