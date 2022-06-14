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
            {id:2,text:"Wie kann ich Kontakt aufnehmen?"},
            {id:3,text:<span>Um Kontakt für z.B. ein Probetraining mit uns aufzunehmen, nutze bitte die Informationen unter dem folgenden Link: <Link to="/start/kontakt"><LinkTextContainer>Kontakt</LinkTextContainer>
            </Link>
              </span>},
            {id:4,text:"2)"},
            {id:5,text:"Wo wird trainiert?"},
            {id:6,text:<span>Im Sommer trainieren wir auf unserem Bogensport- und Mehrzweckplatz. Im Winter in einer Turnhalle. Beide Orte findest du hier: <Link to="/start/verein/sportanlage"><LinkTextContainer>Sportanlage</LinkTextContainer></Link></span>},
            {id:7,text:"3)"},
            {id:8,text:"Wie teuer ist das Bogenschießen?"},
            {id:9,text:<span>Preislich gibt es bei der Ausrüstung nach oben kaum Grenzen. Allerdings gibt es sehr preisgünstige Alternativen für Anfänger wie eine komplette Mietausrüstung. <br />Der Hauptverein nimmt standardmäßig eine Jahresgebühr für die Mitgliedschaft und eine einmalige Aufnahmegebühr: <Link to="/start/verein/beitraege"><LinkTextContainer>Beiträge</LinkTextContainer></Link></span>},
            {id:10,text:"4)"},
            {id:11,text:"Wann wird trainiert?"},
            {id:12,text:<span>Es gibt zwei feste Trainingstage. Immer Dienstags und Donnerstag von 18 - 20 Uhr schießen wir je nach Saison im Freien oder in der Halle. Im Kalender findest Du weitere Termine: <Link to="/start/kalender"><LinkTextContainer>Kalender</LinkTextContainer></Link></span>},
            {id:13,text:"5)"},
            {id:14,text:"Auf welche Distanzen wird geschossen?"},
            {id:15,text:<span> Die Entfernungen bei Turnieren und Wettkämpfen egal welcher Disziplin liegen in der Regel zwischen 18 und 70 Metern. Je nach Bogentyp​, Stilart und in welcher Altersgruppe man schießt sind die Entfernungen und Scheibengrößen unterschiedlich geregelt. Ein Bogen schießt aber viel weiter als 70 Meter! Einen ersten Eindruck der Distanzen kannst Du unter folgendem Link erhalten: <Link to="/start/verein/sportanlage"><LinkTextContainer>Sportanlage</LinkTextContainer></Link></span>},
            {id:16,text:"6)"},
            {id:17,text:"Welche Bogenarten gibt es?"},
            {id:18,text:<span> Es gibt drei grundlegende Bogentypen. Den Lang-, Recurve- und Compoundbogen. Der Langbogen ist der ursprünglichste der drei und hat entsprechend die einfachste Form. Deutlich moderner sind Recurve- und Compoundbogen, wobei ersterer z.B. bei Olympia zu sehen ist. Mehr dazu unter folgendem Link: <Link to="/start/bogenschiessen/ausruestung"><LinkTextContainer>Ausrüstung</LinkTextContainer></Link></span>}
          ]}    
          gridSpaceIndex="0.1fr" gridSpace1="1.5fr" gridSpace2="2.5fr" gridGap="10px"
        />
      </FAQPageImgContainer>
    </FAQPageContainer>
  )
};

export default FAQPage;