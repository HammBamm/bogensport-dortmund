import React from "react";
import { useAlert } from "react-alert";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactTooltip from 'react-tooltip';
import { ClipboardButtonContainer, ClipboardWrapper, DivWrapper, EmailContainer, FallbackContainer } from "./contact-form.styles";

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
              <h3>Wenn Du dich bei uns bewerben willst oder noch Fragen offen sind, schreibe einfach eine E-Mail an:<br /><br />
                <span>kontakt@bogensport-dortmund.de</span>
                <EmailContainer id="email">
                  <CopyToClipboard text={address} onCopy={() => alert.success("E-Mail-Adresse kopiert.")}>
                    <ClipboardButtonContainer data-tip="E-Mail-Adresse kopieren">
                      <svg>
                        <text textAnchor="middle" x="50%" dominantBaseline="hanging" textLength="50" lengthAdjust="spacing">E-Mail</text>
                        <CopyLogo width="50px" x="15%"/>
                        <text textAnchor="middle" x="50%" y="100%" dominantBaseline="text-after-edge" textLength="55" lengthAdjust="spacing">kopieren</text>
                      </svg>
                    </ClipboardButtonContainer>
                  </CopyToClipboard>
                  <ClipboardButtonContainer data-tip="E-Mail schreiben"
                    onClick={() => openEmail() }>
                    <svg>
                      <text textAnchor="middle" x="50%" dominantBaseline="hanging" textLength="50" lengthAdjust="spacing">E-Mail</text>
                      <EMailLogo width="50px" x="15%"/>
                      <text textAnchor="middle" x="50%" y="100%" dominantBaseline="text-after-edge" textLength="55" lengthAdjust="spacing">schreiben</text>
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