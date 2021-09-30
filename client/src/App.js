import React from 'react';
import { Switch, Route } from 'react-router';

import { GlobalStyle } from './global.styles';

import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import ContactPage from './pages/contact/contact-page.component';
import Homepage from './pages/homepage/homepage.component';
import BogenschiessenPage from './pages/bogenschiessen/bogenschiessen-page.component';
import FAQPage from './pages/faq/faq-page.component';
import SportanlagePage from './pages/sportanlage/sportanlage-page.component';
import AnmeldungRegistrierungPage from './pages/anmeldung-registrierung/anmeldung-registrierung.component';
import KalenderPage from './pages/kalender/kalender.component';


const App = () => {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route exact path='/kontakt' component={ContactPage}></Route>
        <Route exact path='/bogenschiessen' component={BogenschiessenPage}></Route>
        <Route exact path='/faq' component={FAQPage}></Route>
        <Route exact path='/verein/sportanlage' component={SportanlagePage}></Route>
        <Route exact path='/anmelden' component={AnmeldungRegistrierungPage}></Route>
        <Route exact path='/kalender' component={KalenderPage}></Route>
      </Switch>
      <Footer></Footer>
    </div>
  )
}

export default App;
