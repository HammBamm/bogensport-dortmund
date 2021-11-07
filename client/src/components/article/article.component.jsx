import React from 'react';

import { ArticleContainer, ArticleTextContainer, ArticleImageContainerLeft, ArticleImageContainerRight } from './article.styles';

export const ArticleLeft = ({img, title, text}) => (
    <ArticleContainer>
        <ArticleImageContainerLeft src={img} />
        <ArticleTextContainer>
            <h2>{title}</h2>
            <p>{text}</p>
        </ArticleTextContainer>
    </ArticleContainer>
);

export const ArticleRight = ({img, title, text}) => (
    <ArticleContainer>
        <ArticleTextContainer>
            <h2>{title}</h2>
            <p>{text}</p>
        </ArticleTextContainer>
        <ArticleImageContainerRight src={img} />
    </ArticleContainer>
);