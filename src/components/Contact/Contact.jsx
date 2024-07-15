import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sendMessage, setSendMessage] = useState(false)
  const [status, setStatus] = useState(null)
  let secrets = import.meta.env
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message ${message}, sent by ${name}`);
    const templateParams = {
      name,
      email,
      message,
      to_name: 'JESUS'
    }
    emailjs.send(secrets.VITE_REACT_SERVICE_ID, secrets.VITE_REACT_YOUR_TEMPLATE_ID, templateParams, secrets.VITE_REACT_PUBLIC_KEY)
    .then((response) => {
      console.log('Message sent successfully!', response.status, response.text);
      setStatus('Message sent successfully!');
      // Clear the form
      setName('');
      setEmail('');
      setMessage('');
      setSendMessage(false);
    })
    .catch((err) => {
      console.error('Failed to send message:', err);
      setStatus('Failed to send message. Please try again later.');
    });
  };

  return (
    <section id="contact">
      <h2>Contacts</h2>
    <ul>
      <li><a target='_blank' href='https://www.linkedin.com/in/leonardo-manteit-8882a629a'>LinkedIn</a></li>
      <li><a target='_blank' href='https://www.instagram.com/leonardomonty/'>Instagram</a></li>
    </ul>
      <button onClick={() => setSendMessage(true)}>DM me now</button>
      {sendMessage ? 
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          ></textarea>
        <button type="submit">Send Message</button>
        <div>{status ? <div>{status}</div> : null}</div>
      </form> 
      : null}
    </section>
  );
};

export default Contact;
