import React from 'react';
import emailjs from 'emailjs-com';

import "../css/contactform.css"
import { getDefaultNormalizer } from '@testing-library/dom';

export default function ContactForm() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_2uny96b', 'template_fdt122n', e.target , 'user_FnyMTZTJ41LFDfpk2i78w')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
    <h3>Write me an e-mail !</h3>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="senderName" />
      <label>Email</label>
      <input type="email" name="sender" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

