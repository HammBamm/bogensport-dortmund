import React from "react";
import { useAlert } from "react-alert";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactTooltip from 'react-tooltip';
import { BackContainer, BackTextContainer, BSLogoContainer, ClipboardButtonContainer, ClipboardWrapper, DivWrapper, EmailContainer, FallbackContainer, LinkContainer } from "./contact-form.styles";

import { ReactComponent as BSLogo } from '../../assets/header/BSLogo.svg';
import { ReactComponent as EMailLogo } from '../../assets/contact/email.svg';
import { ReactComponent as CopyLogo } from '../../assets/contact/copy.svg';
import useMediaQuery from "../media-query/media-query.component";


const ContactForm = () => {

  const alert = useAlert();

  const address = 'kontakt@bogensport-dortmund.de';

  const openEmail = () => {
    alert.info("E-Mail-Programm wird geöffnet.");
    window.location.assign('mailto:'+address);
  }
  const isMobile = useMediaQuery('(max-width: 800px)');
    if(!isMobile) {
      return (
        <DivWrapper>
          <h1>Kontakt</h1>
          <FallbackContainer>
              <h2>Wenn Du dich bei uns bewerben willst oder noch Fragen offen sind, schreibe einfach eine kurze E-Mail an:<br /><br />
                <EmailContainer id="email">
                  <span>kontakt@bogensport-dortmund.de</span>
                  <ClipboardWrapper>
                    <CopyToClipboard text={address} onCopy={() => alert.success("E-Mail-Adresse kopiert.")}>
                      <ClipboardButtonContainer data-tip="E-Mail-Adresse kopieren">
                        <ReactTooltip />
                        <svg><CopyLogo /></svg>
                      </ClipboardButtonContainer>
                    </CopyToClipboard>
                    <ClipboardButtonContainer data-tip="E-Mail schreiben"
                      onClick={() => openEmail() }>
                      <ReactTooltip />
                      <svg><EMailLogo /></svg>
                    </ClipboardButtonContainer>
                  </ClipboardWrapper>
                </EmailContainer>
              </h2>
            </FallbackContainer>
        </DivWrapper>
      );
    } else {
      return (
        <DivWrapper>
          <h1>Kontakt</h1>
          <FallbackContainer>
              <h3>Wenn Du dich bei uns bewerben willst oder noch Fragen offen sind, schreibe einfach eine kurze E-Mail an:<br /><br />
                <span>kontakt@bogensport-dortmund.de</span>
                <EmailContainer id="email">
                  <CopyToClipboard text={address} onCopy={() => alert.success("E-Mail-Adresse kopiert.")}>
                    <ClipboardButtonContainer data-tip="E-Mail-Adresse kopieren">
                      <ReactTooltip />
                      <svg>
                        <text x="0" y="10" textLength="55" >E-Mail</text>
                        <CopyLogo />
                        <text x="0" y="82" textLength="55" >kopieren</text>
                      </svg>
                    </ClipboardButtonContainer>
                  </CopyToClipboard>
                  <ClipboardButtonContainer data-tip="E-Mail schreiben"
                    onClick={() => openEmail() }>
                    <ReactTooltip />
                    <svg>
                      <text x="0" y="10" textLength="55" >E-Mail</text>
                      <EMailLogo />
                      <text x="0" y="82" textLength="55" >schreiben</text>
                    </svg>
                  </ClipboardButtonContainer>
                </EmailContainer>
              </h3>
            </FallbackContainer>
        </DivWrapper>
      );
    }
};

export default ContactForm;