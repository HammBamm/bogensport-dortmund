import React from 'react';

import { ArticleContainer, ArticleImageContainer, ArticleTextContainer } from './article.styles';

const Article = ({img, title, text}) => (
    <ArticleContainer>
        <ArticleImageContainer src={img} />
        <ArticleTextContainer>
            <h2>{title}</h2>
            <p>{text}</p>
        </ArticleTextContainer>
    </ArticleContainer>
);

export default Article;