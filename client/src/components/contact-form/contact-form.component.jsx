import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { FormTextarea } from "../form-input/form-input.styles";
import { ContactFormContainer } from "./contact-form.styles";

const ContactForm = () => {

  const [status, setStatus] = useState("Senden");
  const [formVals, setFormVals] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = formVals;

  const handleSubmit = async event => {
    event.preventDefault();

    setStatus("Sende Nachricht...");
    const { name, email, message } = event.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch("http://localhost:5000/kontakt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Senden");
    let result = await response.json();
    alert(result.status);
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setFormVals({ ...formVals, [name]: value });
  };

  return (
    <ContactFormContainer>
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
          required
        />
        <FormTextarea
          name='message'
          onChange={(event) => {handleChange(event)}}
          form='contactFormId'
          placeholder='Nachricht'
          rows="10"
          value={message}
          required
        ></FormTextarea>
        <CustomButton inverted type="submit">{status}</CustomButton>
      </form>
    </ContactFormContainer>
  );
};

export default ContactForm;