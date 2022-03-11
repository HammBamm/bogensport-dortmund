import React, { useState } from "react";
import { useAlert } from "react-alert";
import axios from 'axios';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Headline } from "../article/article.component";
import CustomButton from "../custom-button/custom-button.component";
import { FormInput } from "../form-input/form-input.component";
import { FormTextarea } from "../form-input/form-input.styles";
import { ClipboardButtonContainer, ClipboardContainer, ContactFormContainer, EmailContainer, FallbackContainer, FormWrapperContainer, TextareaLabelContainer } from "./contact-form.styles";

import clipboardImg from '../../assets/contact/clipboard.png';

const ContactForm = () => {

  const API_PATH = 'http://server.bogensport-dortmund.de';
  const alert = useAlert();
  const [fallback, setFallback] = useState(false);
  const [status, setStatus] = useState("Senden");
  const [formVals, setFormVals] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [disabled, setDisabled] = useState(false);

/*   useEffect(() => {
    const timeout = setTimeout(() => { setDisabled(false) }, 3000);  
  },[]); */

  const { name, email, message } = formVals;

  const handleSubmit = event => {
    event.preventDefault();
    alert.info("Kontaktinformationen werden gesendet.")
    setStatus("Sende Nachricht...");
    const { name, email, message } = event.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    /* await fetch("http://localhost:5000/kontakt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
    .then(response => {
      console.log(response);
      if(response.status!==200){
        alert.error("Kontaktinformationen konnten nicht gesendet werden.");
        setDisabled(false);
        setFallback(true);
      } else {
        console.log(response.status)
        alert.success("Kontaktinformationen wurden erfolgreich gesendet.");
        setStatus("Gesendet");
      }
      
    })
    .catch(error => {
      console.log(error);
      alert.error("Kontaktinformationen konnten nicht gesendet werden.");
      setDisabled(false);
      setFallback(true);
    }); */
    
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: details
    })
    .then(response => {
      console.log(response);
      if(response.status!==200){
        alert.error("Kontaktinformationen konnten nicht gesendet werden.");
        setDisabled(false);
        setFallback(true);
      } else {
        console.log(response.status)
        alert.success("Kontaktinformationen wurden erfolgreich gesendet.");
        setStatus("Gesendet");
      }
      
    })
    .catch(error => {
      console.log(error);
      alert.error("Kontaktinformationen konnten nicht gesendet werden.");
      setDisabled(false);
      setFallback(true);
    });

  };

  const handleChange = event => {
    const { value, name } = event.target;

    setFormVals({ ...formVals, [name]: value });
  };

  return (
    <ContactFormContainer>
      <Headline text="Kontakt"/>
      <FormWrapperContainer>
        <form id= 'contactFormId' onSubmit={handleSubmit}>
          <FormInput
            name='name'
            type='text'
            value={name}
            handleChange={handleChange}
            label='Vor- und Nachname'
            required
            />
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={email}
            label='E-Mail'
            maxlength="256"
            required
          />
          <TextareaLabelContainer className={message.length ? 'shrink' : ''}>Nachricht</TextareaLabelContainer>
          <FormTextarea
            name='message'
            onChange={(event) => {handleChange(event)}}
            form='contactFormId'
            id= "msgbox"
            placeholder='Hallo, ich will Bogenschießen.'
            rows="10"
            value={message}
            required
          ></FormTextarea>
          <CustomButton id="submitButton" inverted type="submit" onClick={() => setDisabled(true) } disabled={disabled}>{status}</CustomButton>
        </form>
        {
        fallback ? <FallbackContainer><h2>&#128679;Aufgrund eines Fehlers auf dem Server konnte das Kontaktformular nicht gesendet werden.<br />
        Alternativ kann auch eine Nachricht an folgende E-Mail versendet werden: <EmailContainer id="email">kontakt@bogensport-dortmund.de</EmailContainer></h2>
        <CopyToClipboard text="kontakt@bogensport-dortmund.de" onCopy={() => alert.success("E-Mail-Adresse kopiert.")}>
          <ClipboardButtonContainer>
            <ClipboardContainer src={clipboardImg} alt="Copy to clipboard" />
          </ClipboardButtonContainer>
        </CopyToClipboard>
        </FallbackContainer>  : status==='Gesendet' ? 
          <FallbackContainer><h2>&#128235; Danke für deine Nachricht. Wir melden uns bei Dir über deine angebene E-Mail: <br /><br />
          <EmailContainer>{formVals.email}</EmailContainer></h2>
        </FallbackContainer> :
          <span />
        }
      </FormWrapperContainer>
      
    </ContactFormContainer>
  );
};

export default ContactForm;