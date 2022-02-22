import React from 'react';
import { ArticleGridWrapper, Headline } from '../../components/article/article.component';
import { FAQPageContainer, FAQPageImgContainer, LinkTextContainer } from './faq-page.styles';
import { Link } from 'react-router-dom';

const FAQPage = () => {
  return (
    <FAQPageContainer>
      <Headline text="FAQ"/>
      <FAQPageImgContainer>
        <ArticleGridWrapper
          title="Häufig gestellte Fragen"
          textArr={[
            {id:1,text:"1)"},
            {id:2,text:"Wie kann ich mich anmelden?"},
            {id:3,text:<Link to="/kontakt">Um Kontakt mit uns aufzunehmen, nutzen Sie Bitte folgenden Link: <LinkTextContainer>Kontaktformular</LinkTextContainer></Link>},
            {id:4,text:"2)"},
            {id:5,text:"Verwaltungsgebühr"},
            {id:6,text:"6,00€"},
          ]}    
          gridSpaceIndex="0.1fr" gridSpace1="1.5fr" gridSpace2="2.5fr" gridGap="6px" rowGap="8px"
        />
      </FAQPageImgContainer>
    </FAQPageContainer>
  )
};

export default FAQPage;