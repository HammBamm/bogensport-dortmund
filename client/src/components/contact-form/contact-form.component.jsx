import React from "react";
import { useAlert } from "react-alert";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactTooltip from 'react-tooltip';
import { BackContainer, BackTextContainer, BSLogoContainer, ClipboardButtonContainer, DivWrapper, EmailContainer, FallbackContainer, LinkContainer } from "./contact-form.styles";

import { ReactComponent as BSLogo } from '../../assets/header/BSLogo.svg';
import { ReactComponent as EMailLogo } from '../../assets/contact/email.svg';
import { ReactComponent as CopyLogo } from '../../assets/contact/copy.svg';


const ContactForm = () => {

  const alert = useAlert();

  const address = 'kontakt@bogensport-dortmund.de';

  const openEmail = () => {
    alert.info("E-Mail-Programm wird geöffnet.");
    window.location.assign('mailto:'+address);
  }

  return (
    <DivWrapper>
      <h1>Kontakt</h1>
      <FallbackContainer>
          <h2>Wenn Du dich bei uns bewerben willst, schreibe einfach eine kurze E-Mail:<br /><br />
            <EmailContainer id="email">
              <span>kontakt@bogensport-dortmund.de</span>
              <CopyToClipboard text={address} onCopy={() => alert.success("E-Mail-Adresse kopiert.")}>
                <ClipboardButtonContainer data-tip="E-Mail-Adresse kopieren">
                  <ReactTooltip />
                  <CopyLogo />
                </ClipboardButtonContainer>
             </CopyToClipboard>
              <ClipboardButtonContainer data-tip="E-Mail schreiben"
                onClick={() => openEmail() }>
                <ReactTooltip />
                <EMailLogo />
              </ClipboardButtonContainer>
            </EmailContainer>
            <LinkContainer to='/menü'>
                <BackContainer>
                  <BSLogoContainer>
                  <svg><BSLogo /></svg>
                  </BSLogoContainer> 
                  <BackTextContainer>
                    <h3>Zurück zum <br />
                    Hauptmenü</h3>
                  </BackTextContainer>
                </BackContainer>
              </LinkContainer>
          </h2>
        </FallbackContainer>
    </DivWrapper>
  );
};

export default ContactForm;