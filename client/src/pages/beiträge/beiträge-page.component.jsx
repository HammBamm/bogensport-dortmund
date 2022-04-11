import React from 'react';
import { ArticleGridWrapper, Headline } from '../../components/article/article.component';
import { ReactComponent as TUSLogo } from '../../assets/header/tus-scharnhorst3.svg';
import { BeiträgeLogoContainer, BeiträgePageContainer, BeiträgePageImgContainer } from './beiträge-page.styles';

const gridLayout = {
  gap: "24px",
  space1: "1.3fr",
  space2: "0.3fr",
  indexSpace: 0
}

const BeiträgePage = () => (
  <BeiträgePageContainer>
    <Headline text="Beiträge"/>
    <BeiträgePageImgContainer>
      <ArticleGridWrapper space1="1.5fr" space2="0.2fr"
        title="Verwaltungsgebühr des TUS Scharnhorst (einmalig)"
        textArr={[
          {id:1,text:"Verwaltungsgebühr"},
          {id:2,text:"6,00€"},
        ]} 
        gridSpaceIndex={gridLayout.indexSpace} gridSpace1={gridLayout.space1} gridSpace2={gridLayout.space2} gridGap={gridLayout.gap}
      />
      <ArticleGridWrapper
        title="Aufnahmegebühr (einmalig)"
        textArr={[
          {id:1,text:"Erwachsene"},
          {id:2,text:"50,00€"},
          {id:3,text:"Erwachsener mit Kind"},
          {id:4,text:"50,00€"},
          {id:5,text:"Kinder bis 12 Jahren"},
          {id:6,text:"25,00€"},
          {id:7,text:"Familien (2 Erwachsene mit Kind/Kindern)"},
          {id:8,text:"75,00€"},
        ]}
        gridSpaceIndex={gridLayout.indexSpace} gridSpace1={gridLayout.space1} gridSpace2={gridLayout.space2} gridGap={gridLayout.gap}
      />
      <ArticleGridWrapper
        title="Jahresbeitrag"
        textArr={[
          {id:1,text:"Erwachsene"},
          {id:2,text:"84,00€"},
          {id:3,text:"Kinder, Jugendliche, Schüler, Auszubildende und Studenten bis 27 Jahre"},
          {id:4,text:"54,00€"},
          {id:5,text:"Passive Mitglieder"},
          {id:6,text:"60,00€"},
          {id:7,text:"Familienrabatt (ab 3 Personen)"},
          {id:8,text:"20%"},
        ]}
        gridSpaceIndex={gridLayout.indexSpace} gridSpace1={gridLayout.space1} gridSpace2={gridLayout.space2} gridGap={gridLayout.gap}
      />
      <ArticleGridWrapper
        title="Mietbogen"
        textArr={[
          {id:1,text:"Monatliche Miete eines Vereinsbogen inklusive Zubehör"},
          {id:2,text:"10,00€"},
        ]}  
        gridSpaceIndex={gridLayout.indexSpace} gridSpace1={gridLayout.space1} gridSpace2={gridLayout.space2} gridGap={gridLayout.gap}
      />
      <BeiträgeLogoContainer to={{ pathname: "http://www.tusscharnhorst.de/index.php/mitglied-werden" }} target="_blank">
        <svg><TUSLogo/></svg>
      </BeiträgeLogoContainer>
    </BeiträgePageImgContainer>
  </BeiträgePageContainer>
);

export default BeiträgePage;