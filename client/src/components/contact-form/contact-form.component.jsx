import React, { useState } from "react";
import { useAlert } from "react-alert";
import axios from 'axios';
import { Form, Field } from 'react-final-form'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import CustomButton from "../custom-button/custom-button.component";
import { BackContainer, BackTextContainer, BSLogoContainer, ClipboardButtonContainer, ClipboardContainer, DivWrapper, EmailContainer, FallbackContainer, LinkContainer } from "./contact-form.styles";

import { ReactComponent as BSLogo } from '../../assets/header/BSLogo.svg';
import clipboardImg from '../../assets/contact/clipboard.png';

const ContactForm = () => {

  // const API_PATH = 'http://server.bogensport-dortmund.de';
  const API_PATH = 'http://localhost:5000/kontakt';
  const alert = useAlert();
  const [fallback, setFallback] = useState(true);
  const [status, setStatus] = useState("Senden");
  const [formVals, setFormVals] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });
  const [disabled, setDisabled] = useState(false);

/*   useEffect(() => {
    const timeout = setTimeout(() => { setDisabled(false) }, 3000);  
  },[]); */

  const onSubmit = values => {
    alert.info("Kontaktinformationen werden gesendet.")
    setStatus("Sende Nachricht...");
    setFormVals(values);
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: values
    })
    .then(response => {
      if(response.status!==200){
        alert.error("Kontaktinformationen konnten nicht gesendet werden.");
        setDisabled(false);
        setFallback(true);
        setStatus("Server Fehler");
      } else {
        alert.success("Kontaktinformationen wurden erfolgreich gesendet.");
        setStatus("Gesendet");
      }
      
    })
    .catch(error => {
      console.log(error);
      alert.error("Kontaktinformationen konnten nicht gesendet werden.");
      setDisabled(false);
      setFallback(true);
      setStatus("Server Fehler");
    });

  };

  return (
    <DivWrapper isFallbacked={fallback}>
      <h1>Kontaktformular</h1>
      <Form onSubmit={onSubmit}>
      {({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Vorname</label>
              <Field           
                name='firstname'
                component="input"
                type='text'
                placeholder="Vorname"
                required
                />
            </div>
            <div>
              <label>Nachname</label>
              <Field           
                name='lastname'
                component="input"
                type='text'
                placeholder="Nachname"
                required
                />
            </div>
            <div>
              <label>E-Mail</label>
            <Field 
              name='email'
              type='email'
              component="input"
              placeholder="E-Mail"
              required
              />
            </div>
            <div>
              <label>Nachricht</label>
            <Field
              name='message'
              component="textarea"
              placeholder='Hallo, ich will Bogenschießen.'
              required />
            </div>
            <CustomButton id="submitButton" inverted type="submit" onClick={() => setDisabled(true) } disabled={disabled}>{status}</CustomButton>
          </form>
        )}
      </Form>
      {
      fallback && disabled ? 
        <FallbackContainer>
          <h2>&#128679; Aufgrund eines Fehlers auf dem Server konnte das Kontaktformular nicht gesendet werden.<br /><br />
            Alternativ kann auch eine E-Mail an folgende Adresse versendet werden: <br /> 
            <EmailContainer id="email">
            <span>kontakt@bogensport-dortmund.de</span>
              <CopyToClipboard text="kontakt@bogensport-dortmund.de" onCopy={() => alert.success("E-Mail-Adresse kopiert.")}>
                <ClipboardButtonContainer>
                  <ClipboardContainer src={clipboardImg} alt="Copy to clipboard" />
                </ClipboardButtonContainer>
              </CopyToClipboard>
            </EmailContainer>
          </h2>
        </FallbackContainer>  : 
      fallback && disabled === false ? 
        <FallbackContainer>
          <h2>&#128679; Zur Zeit ist das Formular leider nicht benutzbar.<br /><br />
            Alternativ kann auch eine E-Mail an folgende Adresse versendet werden: <br /> <br /> 
            <EmailContainer id="email">
              <span>kontakt@bogensport-dortmund.de</span>
              <CopyToClipboard text="kontakt@bogensport-dortmund.de" onCopy={() => alert.success("E-Mail-Adresse kopiert.")}>
                <ClipboardButtonContainer>
                  <ClipboardContainer src={clipboardImg} alt="Copy to clipboard" />
                </ClipboardButtonContainer>
             </CopyToClipboard>
            </EmailContainer>
            <LinkContainer to='/menü'>
                <BackContainer>
                  <BSLogoContainer>
                    <BSLogo />
                  </BSLogoContainer> 
                  <BackTextContainer>
                    <h3>Zurück zum <br />
                    Hauptmenü</h3>
                  </BackTextContainer>
                </BackContainer>
              </LinkContainer>
          </h2>
        </FallbackContainer>  :
      status==='Gesendet' ? 
          <FallbackContainer>
            <h2>&#128235; Danke für deine Nachricht. Wir melden uns bei Dir über deine angebene E-Mail: <br /><br />
              <EmailContainer>{formVals.email}</EmailContainer>
              <LinkContainer to='/menü'>
                <BackContainer>
                  <BSLogoContainer>
                    <BSLogo />
                  </BSLogoContainer> 
                  <BackTextContainer>
                    <h3>Zurück zum <br />
                    Hauptmenü</h3>
                  </BackTextContainer>
                </BackContainer>
              </LinkContainer>
            </h2>
          </FallbackContainer> :
        <span />
      }
    </DivWrapper>
  );
};

export default ContactForm;