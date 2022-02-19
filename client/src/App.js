import React, {Suspense} from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './global.styles';

import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import ContactPage from './pages/contact/contact-page.component';
import Homepage from './pages/homepage/homepage.component';
import BogenschiessenPage from './pages/bogenschiessen/bogenschiessen-page.component';
import FAQPage from './pages/faq/faq-page.component';
import SportanlagePage from './pages/sportanlage/sportanlage-page.component';
import AnmeldungRegistrierungPage from './pages/anmeldung-registrierung/anmeldung-registrierung.component';
import KalenderPage from './pages/kalender/kalender-page.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import AusrüstungPage from './pages/ausrüstung/ausrüstung.component';
import ImpressumPage from './pages/impressum/impressum.component';
import VereinPage from './pages/verein/verein-page.component';
import EinstiegPage from './pages/einstieg/einstieg-page.component';
import BeiträgePage from './pages/beiträge/beiträge-page.component';
import LandingPage from './pages/landing/landing-page.component';
import MentalitätPage from './pages/mentalität/mentalität.component';


const App = () => (
  <div>
    <GlobalStyle />
    
    <BrowserRouter>
    <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={ <Spinner /> }>
            <Route exact path='/' component={LandingPage}></Route>
            <Route exact path='/menü' component={Homepage}></Route>
            <Route exact path='/kontakt' component={ContactPage}></Route>
            <Route exact path='/menü/bogenschießen' component={BogenschiessenPage}></Route>
            <Route exact path='/menü/verein' component={VereinPage}></Route>
            <Route exact path='/verein/beiträge' component={BeiträgePage}></Route>
            <Route exact path='/verein/mentalität' component={MentalitätPage}></Route>
            <Route exact path='/faq' component={FAQPage}></Route>
            <Route exact path='/menü/verein/sportanlage' component={SportanlagePage}></Route>
            <Route exact path='/anmelden' component={AnmeldungRegistrierungPage}></Route>
            <Route exact path='/kalender' component={KalenderPage}></Route>
            <Route exact path='/menü/bogenschießen/ausrüstung' component={AusrüstungPage}></Route>
            <Route exact path='/impressum' component={ImpressumPage}></Route>
            <Route exact path='/menü/bogenschießen/einstieg' component={EinstiegPage}></Route>
          </Suspense>
        </ErrorBoundary>
      </Switch>
    <Footer />
    </BrowserRouter>
  </div>
)


export default App;
