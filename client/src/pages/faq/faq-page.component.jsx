import React from 'react';
import { ArticleGridWrapper, Headline } from '../../components/article/article.component';
import { FAQPageContainer, FAQPageImgContainer } from './faq-page.styles';
import { Link } from 'react-router-dom';

const FAQPage = () => {
  return (
    <FAQPageContainer>
      <Headline text="FAQ"/>
      <FAQPageImgContainer>
        <ArticleGridWrapper
          title="Fragen"
          textArr={[
            {id:1,text:"Wie kann ich mich anmelden?"},
            {id:2,text:`${<Link to="/kontakt">Kontaktformular</Link>}`},
            {id:1,text:"Verwaltungsgebühr"},
            {id:2,text:"6,00€"},
          ]}    
        />
      </FAQPageImgContainer>
    </FAQPageContainer>
  )
};

export default FAQPage;