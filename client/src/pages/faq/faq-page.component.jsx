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
            {id:2,text:"Wie kann ich Kontakt aufnehmen, um z.B. ein Probetraining zu absolvieren?"},
            {id:3,text:<span>Um Kontakt mit uns aufzunehmen, nutze bitte den folgenden Link: <Link to="/kontakt"><LinkTextContainer>Kontaktformular</LinkTextContainer>
            </Link>
              </span>},
            {id:4,text:"2)"},
            {id:5,text:"Wo wird trainiert?"},
            {id:6,text:<span>Im Sommer trainieren wir auf unserem Bogensport- und Mehrzweckplatz. Im Winter in einer Turnhalle. Beide Orte findest du hier: <Link to="/menü/verein/sportanlage"><LinkTextContainer>Sportanlage</LinkTextContainer></Link></span>},
            {id:7,text:"3)"},
            {id:8,text:"Wie teuer ist das Bogenschießen?"},
            {id:9,text:<span>Preislich gibt es bei der Ausrüstung nach oben kaum Grenzen, allerdings gibt es sehr preisgünstige Alternativen für Anfänger. Mehr dazu hier: <Link to="/menü/bogenschießen/einstieg"><LinkTextContainer>Kosten für Ausrüstung</LinkTextContainer></Link> und <Link to="/verein/beiträge"><LinkTextContainer>Beiträge</LinkTextContainer></Link></span>},
            {id:10,text:"4)"},
            {id:11,text:"Wann wird trainiert?"},
            {id:12,text:<span>Es gibt zwei feste Trainingstage. Immer Dienstags und Donnerstag von 18 - 20 Uhr schießen wir je nach Saison im Freuen oder in der Halle. Im Kalender findest Du weitere Termine: <Link to="/kalender"><LinkTextContainer>Kalender</LinkTextContainer></Link></span>},
            {id:13,text:"5)"},
            {id:14,text:"Auf welche Entfernungen wird geschossen?"},
            {id:15,text:<span> Die Entfernungen bei Turnieren und Wettkämpfen egal welcher Disziplin liegen in der Regel zwischen 18 und 70 Metern. Je nach dem welchen Bogentyp​, welche Stilart und in welcher Altersgruppe man schießt sind die Entfernungen und Scheibengrößen unterschiedlich geregelt. Ein Bogen schießt aber viel weiter als 70 Meter! Visuell werden die Distanzen unter folgendem Link dargestellt: <Link to="/menü/verein/sportanlage"><LinkTextContainer>Sportanlage</LinkTextContainer></Link></span>}
          ]}    
          gridSpaceIndex="0.1fr" gridSpace1="1.0fr" gridSpace2="2.5fr" gridGap="12px"
        />
      </FAQPageImgContainer>
    </FAQPageContainer>
  )
};

export default FAQPage;