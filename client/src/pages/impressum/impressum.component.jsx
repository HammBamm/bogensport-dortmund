import React from 'react';
import { ArticleEnumeration, ArticleGridWrapper, ArticleTextOnly, Headline } from '../../components/article/article.component';
import { ImpressumLogoContainer, ImpressumPageContainer, ImpressumPageImgContainer, ImpressumWrapper } from './impressum.styles';
import { ReactComponent as TUSLogo } from '../../assets/header/tus-scharnhorst3.svg';

const gridLayout = {
  gap: "8px",
  space1: "max-content",
  space2: "auto",
  indexSpace: 0
}

const ImpressumPage = () => (
  <ImpressumPageContainer>
    <Headline text="Impressum"/>
    <ImpressumWrapper>
      <ImpressumPageImgContainer>
        <ArticleGridWrapper
          title="Angaben gemäß § 5 TMG"
          textArr={[
            {id:1,text:"TuS Scharnhorst 1895/1926 e.V."},
            {id:2,text:""},
            {id:3,text:"Gleiwitzstraße 281"},
            {id:4,text:""},
            {id:5,text:"44328 Dortmund"},
          ]}
          gridSpaceIndex={gridLayout.indexSpace} gridSpace1={gridLayout.space1} gridSpace2={gridLayout.space2} gridGap={gridLayout.gap}
        />
        <ImpressumLogoContainer to={{ pathname: "http://www.tusscharnhorst.de/" }} target="_blank">
          <svg><TUSLogo/></svg>
        </ImpressumLogoContainer>
      </ImpressumPageImgContainer>
      <ArticleEnumeration
        title="Vertreten durch:"
        textArr={[
          {id:1,text:"1. Vorsitzender Wolfgang Mazanke"},
        ]}   
      />
      <ArticleGridWrapper
        title="Kontakt"
        textArr={[
          {id:1,text:"Telefon:"},
          {id:2,text:"0231/5899143"},
          {id:3,text:"Fax:"},
          {id:4,text:"0231/22278480"},
          {id:5,text:"E-Mail:"},
          {id:6,text:"tusscharnhorst@dokom.net"},
        ]}
        gridSpaceIndex={gridLayout.indexSpace} gridSpace1={gridLayout.space1} gridSpace2={gridLayout.space2} gridGap={gridLayout.gap}
      />
      <ArticleGridWrapper
        title="Vereinsregister"
        textArr={[
          {id:1,text:"Registergericht:"},
          {id:2,text:"Amtsgericht Dortmund"},
          {id:3,text:"Registernummer:"},
          {id:4,text:"VR 2108"},
        ]}
        gridSpaceIndex={gridLayout.indexSpace} gridSpace1={gridLayout.space1} gridSpace2={gridLayout.space2} gridGap={gridLayout.gap}
      />
      <ArticleGridWrapper
        title="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:"
        textArr={[
          {id:1,text:"Bogensportabteilung"},
          {id:2,text:""},
          {id:3,text:"Uwe Niehaus"},
          {id:4,text:""},
          {id:5,text:"Unnaerstraße 34"},
          {id:6,text:""},
          {id:7,text:"59439 Holzwickede"},
          {id:8,text:""},
          {id:9,text:"E-Mail: bogenportdortmund@gmail.com"},
          {id:10,text:""},
        ]}
        gridSpaceIndex={gridLayout.indexSpace} gridSpace1={gridLayout.space1} gridSpace2={gridLayout.space2} gridGap={gridLayout.gap}
      />
    </ImpressumWrapper>
    
    <ArticleTextOnly 
      title="Haftung für Inhalte"
      text="Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen."    
    />
    <ArticleTextOnly 
      title="Haftung für Links"
      text="Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen."    
    />
    <ArticleTextOnly 
      title="Datenschutz"
      text="Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
      Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
      Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor."    
    />
    <ArticleTextOnly 
      title="Google Analytics"
      text="Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. (''Google''). Google Analytics verwendet sog. ''Cookies'', Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglicht. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden."    
    />
  </ImpressumPageContainer>
);

export default ImpressumPage;